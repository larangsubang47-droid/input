// ==========================================
// KONFIGURASI API
// ==========================================
const API_URL = 'https://script.google.com/macros/s/AKfycbxmWxR8PgLMdDaGS5CKzolDZ2ncQ_FH01I3NBnkFt7sKFs5RfVB2vx8hWL51J0RE-MmDA/exec';

// ==========================================
// KONFIGURASI API
// ==========================================
// ==========================================
const dataStructure = {
  levelAir: [
    { name: 'Air Baku Intake', satuan: 'Mdpl' },
    { name: 'Reservoar', satuan: 'cm' }
  ],
  flowDebit: [
    { name: 'Inlet WTP', satuan: 'Lps' },
    { name: 'Outlet WTP', satuan: 'Lps' }
  ],
  pressureDistribusi: [
    { name: 'Pompa 1', satuan: 'Bar' },
    { name: 'Pompa 2', satuan: 'Bar' },
    { name: 'Pompa 3', satuan: 'Bar' }
  ],
  hzDistribusi: [
    { name: 'Pompa 1', satuan: 'Hz' },
    { name: 'Pompa 2', satuan: 'Hz' },
    { name: 'Pompa 3', satuan: 'Hz' }
  ],
  pressureIntake: [
    { name: 'Pompa 1', satuan: 'Bar' },
    { name: 'Pompa 2', satuan: 'Bar' },
    { name: 'Pompa 3', satuan: 'Bar' }
  ],
  hzIntake: [
    { name: 'Pompa 1', satuan: 'Hz' },
    { name: 'Pompa 2', satuan: 'Hz' },
    { name: 'Pompa 3', satuan: 'Hz' }
  ],
  wdc: [
    { name: 'Level WDC (%)', satuan: 'Persen' },
    { name: 'LPS OUT WDC', satuan: 'LPS' }
  ],
  backwashFilter: [
    { name: 'Plan 1', satuan: 'Unit' },
    { name: 'Plan 2', satuan: 'Unit' }
  ]
};

// ==========================================
// STATE MANAGEMENT
// ==========================================
let currentUser = null;
let deferredPrompt = null;
let selectedTimes = [];
let autoSaveInterval = null;
let isDraftMode = false;

// ==========================================
// INITIALIZATION
// ==========================================
window.onload = function() {
  const savedUser = localStorage.getItem('currentUser');
  if(savedUser) {
    currentUser = JSON.parse(savedUser);
    showMainApp();
  }
  
  // Set default date to today
  const today = new Date();
  document.getElementById('tanggal').valueAsDate = today;
  
  // Set hari
  const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  document.getElementById('hari').value = days[today.getDay()];
  
  // Initialize selected times
  updateSelectedTimes();
  
  // Check for draft on date change
  document.getElementById('tanggal').addEventListener('change', loadDraftForDate);
};

// ==========================================
// AUTO-SAVE DRAFT FEATURE
// ==========================================

/**
 * Generate unique draft key based on date
 */
function getDraftKey() {
  const tanggal = document.getElementById('tanggal').value;
  return `draft_${tanggal}`;
}

/**
 * Auto-save draft every 30 seconds
 */
function startAutoSave() {
  // Clear existing interval
  if(autoSaveInterval) {
    clearInterval(autoSaveInterval);
  }
  
  // Auto-save every 30 seconds
  autoSaveInterval = setInterval(() => {
    saveDraft(true); // true = silent save
  }, 30000);
}

/**
 * Stop auto-save
 */
function stopAutoSave() {
  if(autoSaveInterval) {
    clearInterval(autoSaveInterval);
    autoSaveInterval = null;
  }
}

/**
 * Save current form data as draft
 */
function saveDraft(silent = false) {
  try {
    const draftKey = getDraftKey();
    const draftData = collectAllFormData();
    
    // Save to localStorage
    localStorage.setItem(draftKey, JSON.stringify(draftData));
    localStorage.setItem('lastDraftDate', draftData.tanggal);
    
    if(!silent) {
      showNotification('💾 Draft berhasil disimpan!', 'success');
      updateDraftIndicator(true);
    }
    
    console.log('Draft saved:', draftKey);
  } catch(error) {
    if(!silent) {
      showNotification('Gagal menyimpan draft: ' + error.message, 'error');
    }
  }
}

/**
 * Load draft for specific date
 */
function loadDraftForDate() {
  const draftKey = getDraftKey();
  const savedDraft = localStorage.getItem(draftKey);
  
  if(savedDraft) {
    if(confirm('Ditemukan draft untuk tanggal ini. Muat draft?')) {
      loadDraft(draftKey);
    }
  } else {
    // Clear form if no draft
    updateDraftIndicator(false);
  }
}

/**
 * Load draft data into form
 */
function loadDraft(draftKey = null) {
  try {
    const key = draftKey || getDraftKey();
    const savedDraft = localStorage.getItem(key);
    
    if(!savedDraft) {
      showNotification('Tidak ada draft tersimpan', 'error');
      return;
    }
    
    const draftData = JSON.parse(savedDraft);
    
    // Load basic info
    document.getElementById('hari').value = draftData.hari || '';
    document.getElementById('tanggal').value = draftData.tanggal || '';
    document.getElementById('operatorShift1').value = draftData.operator?.shift1 || '';
    document.getElementById('operatorShift2').value = draftData.operator?.shift2 || '';
    
    // Load time selections
    document.querySelectorAll('.time-check').forEach(cb => {
      cb.checked = draftData.selectedTimes?.includes(cb.value) || false;
    });
    updateSelectedTimes();
    
    // Wait for tables to be created, then load data
    setTimeout(() => {
      // Load table data
      loadTableData('levelAirTable', dataStructure.levelAir, draftData.levelAir);
      loadTableData('flowDebitTable', dataStructure.flowDebit, draftData.flowDebit);
      loadTableData('pressureDistribusiTable', dataStructure.pressureDistribusi, draftData.pressureDistribusi);
      loadTableData('hzDistribusiTable', dataStructure.hzDistribusi, draftData.hzDistribusi);
      loadTableData('pressureIntakeTable', dataStructure.pressureIntake, draftData.pressureIntake);
      loadTableData('hzIntakeTable', dataStructure.hzIntake, draftData.hzIntake);
      loadTableData('wdcTable', dataStructure.wdc, draftData.wdc);
      loadTableData('backwashFilterTable', dataStructure.backwashFilter, draftData.backwashFilter);
      
      // Load other fields
      document.getElementById('kwhWBP1').value = draftData.kwhMeter?.wbp1 || '';
      document.getElementById('kwhLWBP1').value = draftData.kwhMeter?.lwbp1 || '';
      document.getElementById('kwhLWBP2').value = draftData.kwhMeter?.lwbp2 || '';
      document.getElementById('kwhTotal').value = draftData.kwhMeter?.total || '';
      document.getElementById('totalWMAirBaku').value = draftData.totalWM?.airBaku || '';
      document.getElementById('totalWMAirBersih').value = draftData.totalWM?.airBersih || '';
      document.getElementById('catatan').value = draftData.catatan || '';
      
      showNotification('📂 Draft berhasil dimuat!', 'success');
      updateDraftIndicator(true);
      isDraftMode = true;
    }, 100);
    
  } catch(error) {
    showNotification('Gagal memuat draft: ' + error.message, 'error');
  }
}

/**
 * Load data into specific table
 */
function loadTableData(tableId, items, data) {
  if(!data) return;
  
  items.forEach((item, index) => {
    if(data[item.name]) {
      selectedTimes.forEach(time => {
        const inputId = `${tableId}_${index}_${time.replace(':', '')}`;
        const input = document.getElementById(inputId);
        if(input && data[item.name][time] !== undefined) {
          input.value = data[item.name][time];
        }
      });
    }
  });
}

/**
 * Delete current draft
 */
function deleteDraft() {
  if(confirm('Hapus draft untuk tanggal ini?')) {
    const draftKey = getDraftKey();
    localStorage.removeItem(draftKey);
    clearForm();
    updateDraftIndicator(false);
    showNotification('Draft berhasil dihapus', 'success');
  }
}

/**
 * Update draft indicator in UI
 */
function updateDraftIndicator(hasDraft) {
  const indicator = document.getElementById('draftIndicator');
  if(indicator) {
    if(hasDraft) {
      indicator.textContent = '💾 Draft tersimpan';
      indicator.style.display = 'inline-block';
    } else {
      indicator.style.display = 'none';
    }
  }
}

/**
 * Collect all form data
 */
function collectAllFormData() {
  return {
    hari: document.getElementById('hari').value,
    tanggal: document.getElementById('tanggal').value,
    operator: {
      shift1: document.getElementById('operatorShift1').value,
      shift2: document.getElementById('operatorShift2').value
    },
    levelAir: collectTableData('levelAirTable', dataStructure.levelAir),
    flowDebit: collectTableData('flowDebitTable', dataStructure.flowDebit),
    pressureDistribusi: collectTableData('pressureDistribusiTable', dataStructure.pressureDistribusi),
    hzDistribusi: collectTableData('hzDistribusiTable', dataStructure.hzDistribusi),
    pressureIntake: collectTableData('pressureIntakeTable', dataStructure.pressureIntake),
    hzIntake: collectTableData('hzIntakeTable', dataStructure.hzIntake),
    wdc: collectTableData('wdcTable', dataStructure.wdc),
    backwashFilter: collectTableData('backwashFilterTable', dataStructure.backwashFilter),
    kwhMeter: {
      wbp1: document.getElementById('kwhWBP1').value,
      lwbp1: document.getElementById('kwhLWBP1').value,
      lwbp2: document.getElementById('kwhLWBP2').value,
      total: document.getElementById('kwhTotal').value
    },
    totalWM: {
      airBaku: document.getElementById('totalWMAirBaku').value,
      airBersih: document.getElementById('totalWMAirBersih').value
    },
    catatan: document.getElementById('catatan').value,
    selectedTimes: selectedTimes,
    savedAt: new Date().toISOString()
  };
}

// ==========================================
// PWA INSTALL
// ==========================================
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  document.getElementById('installBtn').style.display = 'block';
});

function installPWA() {
  if(deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        showNotification('Aplikasi berhasil diinstall!', 'success');
      }
      deferredPrompt = null;
      document.getElementById('installBtn').style.display = 'none';
    });
  }
}

// ==========================================
// AUTHENTICATION
// ==========================================
async function login() {
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;

  if(!username || !password) {
    showNotification('Username dan password harus diisi!', 'error');
    return;
  }

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify({
        action: 'login',
        username: username,
        password: password
      })
    });

    const result = await response.json();

    if(result.success) {
      currentUser = result.data;
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      showNotification('Login berhasil!', 'success');
      showMainApp();
    } else {
      showNotification(result.message, 'error');
    }
  } catch(error) {
    showNotification('Gagal connect ke server: ' + error.message, 'error');
  }
}

function logout() {
  if(confirm('Yakin ingin logout?')) {
    stopAutoSave();
    localStorage.removeItem('currentUser');
    currentUser = null;
    document.getElementById('mainApp').classList.add('hidden');
    document.getElementById('loginScreen').classList.remove('hidden');
    showNotification('Logout berhasil!', 'success');
  }
}

function showMainApp() {
  document.getElementById('loginScreen').classList.add('hidden');
  document.getElementById('mainApp').classList.remove('hidden');
  document.getElementById('userDisplay').textContent = `👤 ${currentUser.nama}`;
  
  // Initialize tables
  initializeTables();
  loadHistory();
  
  // Start auto-save
  startAutoSave();
  
  // Check for existing draft
  loadDraftForDate();
}

// ==========================================
// TABLE INITIALIZATION
// ==========================================
function updateSelectedTimes() {
  const checkboxes = document.querySelectorAll('.time-check:checked');
  selectedTimes = Array.from(checkboxes).map(cb => cb.value);
  initializeTables();
}

function initializeTables() {
  // Add event listeners to time checkboxes
  document.querySelectorAll('.time-check').forEach(checkbox => {
    checkbox.addEventListener('change', updateSelectedTimes);
  });
  
  // Initialize each table
  createDataTable('levelAirTable', dataStructure.levelAir);
  createDataTable('flowDebitTable', dataStructure.flowDebit);
  createDataTable('pressureDistribusiTable', dataStructure.pressureDistribusi);
  createDataTable('hzDistribusiTable', dataStructure.hzDistribusi);
  createDataTable('pressureIntakeTable', dataStructure.pressureIntake);
  createDataTable('hzIntakeTable', dataStructure.hzIntake);
  createDataTable('wdcTable', dataStructure.wdc);
  createDataTable('backwashFilterTable', dataStructure.backwashFilter);
}

function createDataTable(tableId, items) {
  const container = document.getElementById(tableId);
  if (!container) return;
  
  let html = '<table class="input-table"><thead><tr>';
  html += '<th>Jenis Kegiatan</th><th>Satuan</th>';
  
  selectedTimes.forEach(time => {
    html += `<th>${time}</th>`;
  });
  
  html += '</tr></thead><tbody>';
  
  items.forEach((item, index) => {
    html += `<tr>`;
    html += `<td><strong>${item.name}</strong></td>`;
    html += `<td>${item.satuan}</td>`;
    
    selectedTimes.forEach(time => {
      const inputId = `${tableId}_${index}_${time.replace(':', '')}`;
      html += `<td><input type="number" id="${inputId}" step="0.01" placeholder="0"></td>`;
    });
    
    html += `</tr>`;
  });
  
  html += '</tbody></table>';
  container.innerHTML = html;
}

// ==========================================
// COLLECT DATA FROM TABLES
// ==========================================
function collectTableData(tableId, items) {
  const data = {};
  
  items.forEach((item, index) => {
    data[item.name] = {};
    
    selectedTimes.forEach(time => {
      const inputId = `${tableId}_${index}_${time.replace(':', '')}`;
      const input = document.getElementById(inputId);
      if (input && input.value) {
        data[item.name][time] = parseFloat(input.value);
      }
    });
  });
  
  return data;
}

// ==========================================
// SAVE DATA (FINAL SUBMIT)
// ==========================================
async function saveDataFinal() {
  const hari = document.getElementById('hari').value;
  const tanggal = document.getElementById('tanggal').value;

  if(!hari || !tanggal) {
    showNotification('Hari dan tanggal harus diisi!', 'error');
    return;
  }

  if(!confirm('Submit laporan final ke server? Data akan tersimpan permanen.')) {
    return;
  }

  const saveBtn = document.getElementById('saveFinalBtn');
  saveBtn.disabled = true;
  saveBtn.textContent = '⏳ Mengirim ke server...';

  try {
    const reportData = collectAllFormData();

    const response = await fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify({
        action: 'saveProductionReport',
        userId: currentUser.userId,
        reportData: reportData
      })
    });

    const result = await response.json();

    if(result.success) {
      showNotification('✓ Laporan berhasil dikirim ke server!', 'success');
      
      // Delete draft after successful submit
      const draftKey = getDraftKey();
      localStorage.removeItem(draftKey);
      updateDraftIndicator(false);
      
      clearForm();
      loadHistory();
    } else {
      showNotification('Gagal simpan: ' + result.message, 'error');
    }
  } catch(error) {
    showNotification('Error: ' + error.message, 'error');
  } finally {
    saveBtn.disabled = false;
    saveBtn.textContent = '📤 Submit Final';
  }
}

function clearForm() {
  const today = new Date();
  const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  
  document.getElementById('hari').value = days[today.getDay()];
  document.getElementById('tanggal').valueAsDate = today;
  document.getElementById('operatorShift1').value = '';
  document.getElementById('operatorShift2').value = '';
  document.getElementById('kwhWBP1').value = '';
  document.getElementById('kwhLWBP1').value = '';
  document.getElementById('kwhLWBP2').value = '';
  document.getElementById('kwhTotal').value = '';
  document.getElementById('totalWMAirBaku').value = '';
  document.getElementById('totalWMAirBersih').value = '';
  document.getElementById('catatan').value = '';
  
  // Clear all table inputs
  document.querySelectorAll('.input-table input').forEach(input => {
    input.value = '';
  });
  
  isDraftMode = false;
}

// ==========================================
// LOAD HISTORY
// ==========================================
async function loadHistory() {
  const historyList = document.getElementById('historyList');
  historyList.innerHTML = '<div class="loading"><div class="spinner"></div>Memuat data...</div>';

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify({
        action: 'getProductionHistory',
        userId: currentUser.userId,
        role: currentUser.role,
        limit: 50
      })
    });

    const result = await response.json();

    if(result.success) {
      const records = result.data.records;
      
      if(records.length === 0) {
        historyList.innerHTML = '<div style="text-align:center; padding:40px; color:#999;">Belum ada laporan</div>';
        return;
      }

      let html = '';
      records.forEach(record => {
        const date = new Date(record.createdAt).toLocaleString('id-ID');
        
        html += `
          <div class="history-item" onclick="viewDetail('${record.recordId}')">
            <div class="history-header">
              <span class="history-date">${date}</span>
              <span class="status-badge status-aktif">📄 Laporan</span>
            </div>
            <div class="history-name">${record.hari}, ${record.tanggal}</div>
            <div class="history-id">Operator: ${record.operator.shift1}</div>
          </div>
        `;
      });

      historyList.innerHTML = html;
    } else {
      historyList.innerHTML = '<div style="text-align:center; padding:40px; color:#f44336;">Gagal memuat data</div>';
    }
  } catch(error) {
    historyList.innerHTML = '<div style="text-align:center; padding:40px; color:#f44336;">Error: ' + error.message + '</div>';
  }
}

function viewDetail(recordId) {
  showNotification('Detail untuk ' + recordId, 'success');
  // Implement detail view later
}

// ==========================================
// NAVIGATION
// ==========================================
function switchScreen(screen) {
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => item.classList.remove('active'));

  if(screen === 'form') {
    document.getElementById('formScreen').classList.remove('hidden');
    document.getElementById('historyScreen').classList.add('hidden');
    navItems[0].classList.add('active');
  } else if(screen === 'history') {
    document.getElementById('formScreen').classList.add('hidden');
    document.getElementById('historyScreen').classList.remove('hidden');
    navItems[1].classList.add('active');
    loadHistory();
  }
}

// ==========================================
// NOTIFICATION
// ==========================================
function showNotification(message, type = 'success') {
  const notification = document.getElementById('notification');
  notification.textContent = message;
  notification.className = `notification ${type} show`;
  
  setTimeout(() => {
    notification.classList.remove('show');
  }, 3000);
}

// Request notification permission
if ('Notification' in window && Notification.permission === 'default') {
  Notification.requestPermission();
}

