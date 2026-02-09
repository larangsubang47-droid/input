// ==========================================
// API CONFIGURATION
// ==========================================
const API_URL = 'https://script.google.com/macros/s/AKfycbwo6b5oYH5oqZ_pNOASLZeZH1Zb8Ax3k8YFxQvUrkLO7p2e2-hjadnEiQ9xAUVj_S2R3w/exec';
const dataStructure = {
  Kekeruhan: [
    { name: 'Air Baku', satuan: 'NTU' },
    { name: 'Air Aerasi', satuan: 'NTU' },
    { name: 'SCADA Air Baku', satuan: 'NTU' },
    { name: 'Sedimentasi Plant 1', satuan: 'NTU' },
    { name: 'Sedimentasi Plant 2', satuan: 'NTU' },
    { name: 'Sedimentasi Plant 3', satuan: 'NTU' },
    { name: 'Sedimentasi Plant 4', satuan: 'NTU' },
    { name: 'Outlet Filter Plant 1', satuan: 'NTU' },
    { name: 'Outlet Filter Plant 2', satuan: 'NTU' },
    { name: 'Outlet Filter Plant 3', satuan: 'NTU' },
    { name: 'Outlet Filter Plant 4', satuan: 'NTU' },
    { name: 'Reservoir', satuan: 'NTU' },
    { name: 'Distribusi Campuran', satuan: 'NTU' },
    { name: 'SCADA Distribusi', satuan: 'NTU' }
  ],
  pH: [
    { name: 'Air Baku', satuan: 'pH' },
    { name: 'SCADA Air Baku', satuan: 'pH' },
    { name: 'Sedimentasi Plant 1', satuan: 'pH' },
    { name: 'Sedimentasi Plant 2', satuan: 'pH' },
    { name: 'Sedimentasi Plant 3', satuan: 'pH' },
    { name: 'Sedimentasi Plant 4', satuan: 'pH' },
    { name: 'Outlet Filter Plant 1', satuan: 'pH' },
    { name: 'Outlet Filter Plant 2', satuan: 'pH' },
    { name: 'Outlet Filter Plant 3', satuan: 'pH' },
    { name: 'Outlet Filter Plant 4', satuan: 'pH' },
    { name: 'Reservoir', satuan: 'pH' },
    { name: 'Distribusi Campuran', satuan: 'pH' },
    { name: 'SCADA Distribusi', satuan: 'pH' }
  ],
  Temperatur: [
    { name: 'Air Baku', satuan: '°C' },
    { name: 'Udara', satuan: '°C' },
    { name: 'Distribusi Campuran', satuan: '°C' },
    { name: 'Udara', satuan: '°C' }
  ],
  Warna: [
    { name: 'Air Baku', satuan: 'PtCo' },
    { name: 'Distribusi Campuran', satuan: 'PtCo' }
  ],
  DHL: [
    { name: 'Air Baku', satuan: 'µS/cm' },
    { name: 'Distribusi Campuran', satuan: 'µS/cm' }
  ],
  Ammonium: [
    { name: 'Air Baku', satuan: 'mg/L' },
    { name: 'Outlet Aerasi', satuan: 'mg/L' },
    { name: 'Outlet Filter Plant 1', satuan: 'mg/L' },
    { name: 'Outlet Filter Plant 2', satuan: 'mg/L' },
    { name: 'Outlet Filter Plant 3', satuan: 'mg/L' },
    { name: 'Outlet Filter Plant 4', satuan: 'mg/L' },
    { name: 'Distribusi Campuran', satuan: 'mg/L' }
  ],
  Mangan: [
    { name: 'Air Baku', satuan: 'mg/L' },
    { name: 'Outlet Aerasi', satuan: 'mg/L' },
    { name: 'Outlet Filter Plant 1', satuan: 'mg/L' },
    { name: 'Outlet Filter Plant 2', satuan: 'mg/L' },
    { name: 'Outlet Filter Plant 3', satuan: 'mg/L' },
    { name: 'Outlet Filter Plant 4', satuan: 'mg/L' },
    { name: 'Reservoir', satuan: 'mg/L' },
    { name: 'Distribusi Campuran', satuan: 'mg/L' }
  ],
  Detergen: [
    { name: 'Air Baku', satuan: 'mg/L' },
    { name: 'Air Aerasi', satuan: 'mg/L' },
    { name: 'Distribusi Campuran', satuan: 'mg/L' }
  ],
  DO: [
    { name: 'Air Baku', satuan: 'mg/L' },
    { name: 'Air Aerasi', satuan: 'mg/L' }
  ],
  Besi: [
    { name: 'Air Baku', satuan: 'mg/L' },
    { name: 'Distribusi Campuran', satuan: 'mg/L' }
  ],
  Alumunium: [
    { name: 'Distribusi Campuran', satuan: 'mg/L' }
  ],
  'Free Chlorine': [
    { name: 'Reservoir', satuan: 'mg/L' },
    { name: 'Distribusi Campuran', satuan: 'mg/L' },
    { name: 'SCADA Distribusi', satuan: 'mg/L' }
  ],
  'Total Chlorine': [
    { name: 'Distribusi Campuran', satuan: 'mg/L' }
  ]
};

// ==========================================
// STATE MANAGEMENT
// ==========================================
let currentUser = null;
let deferredPrompt = null;
let selectedTimes = [];
let autoSaveInterval = null;

// ==========================================
// INITIALIZATION
// ==========================================
window.onload = function() {
  const savedUser = localStorage.getItem('currentUser_kualitas');
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
  
  // Load draft if exists
  loadDraft();
  
  // Start auto-save (every 30 seconds)
  startAutoSave();
};

// ==========================================
// AUTO-SAVE & DRAFT MANAGEMENT
// ==========================================
function startAutoSave() {
  if(autoSaveInterval) {
    clearInterval(autoSaveInterval);
  }
  
  autoSaveInterval = setInterval(() => {
    saveDraft(true);
  }, 30000);
}

function saveDraft(silent = false) {
  try {
    const tanggal = document.getElementById('tanggal').value;
    if(!tanggal) return;
    
    const draftData = collectFormData();
    const draftKey = `draft_kualitas_${tanggal}`;
    
    localStorage.setItem(draftKey, JSON.stringify(draftData));
    localStorage.setItem('lastDraftDate_kualitas', tanggal);
    
    if(!silent) {
      showNotification('💾 Draft tersimpan!', 'success');
    }
    
    updateDraftIndicator(true);
  } catch(error) {
    console.error('Error saving draft:', error);
  }
}

function loadDraft() {
  try {
    const tanggal = document.getElementById('tanggal').value;
    const draftKey = `draft_kualitas_${tanggal}`;
    const draftData = localStorage.getItem(draftKey);
    
    if(draftData) {
      const data = JSON.parse(draftData);
      fillFormWithData(data);
      updateDraftIndicator(true);
      showNotification('📄 Draft ditemukan dan dimuat', 'info');
    } else {
      updateDraftIndicator(false);
    }
  } catch(error) {
    console.error('Error loading draft:', error);
  }
}

function deleteDraft() {
  if(confirm('Hapus draft untuk tanggal ini?')) {
    const tanggal = document.getElementById('tanggal').value;
    const draftKey = `draft_kualitas_${tanggal}`;
    localStorage.removeItem(draftKey);
    updateDraftIndicator(false);
    showNotification('Draft dihapus', 'success');
  }
}

function updateDraftIndicator(hasDraft) {
  const indicator = document.getElementById('draftIndicator');
  if(indicator) {
    if(hasDraft) {
      indicator.style.display = 'inline-block';
      indicator.textContent = '📝 Draft tersedia';
    } else {
      indicator.style.display = 'none';
    }
  }
}

function collectFormData() {
  const data = {
    hari: document.getElementById('hari').value,
    tanggal: document.getElementById('tanggal').value,
    operator: document.getElementById('operator').value,
    shift: document.getElementById('shift').value,
    selectedTimes: selectedTimes,
    catatan: document.getElementById('catatan').value
  };
  
  // Collect all parameter data
  Object.keys(dataStructure).forEach(paramName => {
    data[paramName] = collectTableData(paramName, dataStructure[paramName]);
  });
  
  return data;
}

function fillFormWithData(data) {
  if(!data) return;
  
  document.getElementById('hari').value = data.hari || '';
  document.getElementById('tanggal').value = data.tanggal || '';
  document.getElementById('operator').value = data.operator || '';
  document.getElementById('shift').value = data.shift || '';
  document.getElementById('catatan').value = data.catatan || '';
  
  // Restore selected times
  if(data.selectedTimes) {
    selectedTimes = data.selectedTimes;
    
    // Update checkboxes
    document.querySelectorAll('.time-check').forEach(checkbox => {
      checkbox.checked = selectedTimes.includes(checkbox.value);
    });
    
    // Rebuild tables
    initializeTables();
  }
  
  // Fill all parameter data
  Object.keys(dataStructure).forEach(paramName => {
    if(data[paramName]) {
      fillTableData(paramName, dataStructure[paramName], data[paramName]);
    }
  });
}

function fillTableData(paramName, items, data) {
  if(!data) return;
  
  items.forEach((item, index) => {
    if(data[item.name]) {
      selectedTimes.forEach(time => {
        const tableId = paramName + 'Table';
        const inputId = `${tableId}_${index}_${time.replace(':', '')}`;
        const input = document.getElementById(inputId);
        if(input && data[item.name][time]) {
          input.value = data[item.name][time];
        }
      });
    }
  });
}

// ==========================================
// DATE CHANGE HANDLER
// ==========================================
function onDateChange() {
  const oldDate = localStorage.getItem('lastDraftDate_kualitas');
  if(oldDate) {
    saveDraft(true);
  }
  
  const tanggalInput = document.getElementById('tanggal');
  const date = new Date(tanggalInput.value + 'T00:00:00');
  const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  document.getElementById('hari').value = days[date.getDay()];
  
  loadDraft();
}

// ==========================================
// PWA INSTALL
// ==========================================
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  const installBtn = document.getElementById('installBtn');
  if(installBtn) installBtn.style.display = 'block';
});

function installPWA() {
  if(deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        showNotification('Aplikasi berhasil diinstall!', 'success');
      }
      deferredPrompt = null;
      const installBtn = document.getElementById('installBtn');
      if(installBtn) installBtn.style.display = 'none';
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
      localStorage.setItem('currentUser_kualitas', JSON.stringify(currentUser));
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
    localStorage.removeItem('currentUser_kualitas');
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
  
  initializeTables();
  loadHistory();
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
  document.querySelectorAll('.time-check').forEach(checkbox => {
    checkbox.addEventListener('change', updateSelectedTimes);
  });
  
  // Create table for each parameter
  Object.keys(dataStructure).forEach(paramName => {
    createDataTable(paramName + 'Table', paramName, dataStructure[paramName]);
  });
}

function createDataTable(tableId, paramName, items) {
  const container = document.getElementById(tableId);
  if (!container) {
    console.warn(`Container ${tableId} not found`);
    return;
  }
  
  let html = '<table class="input-table"><thead><tr>';
  html += '<th>Jenis Sampel</th><th>Satuan</th>';
  
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
      html += `<td><input type="number" id="${inputId}" step="0.01" placeholder="0.00" oninput="saveDraft(true)"></td>`;
    });
    
    html += `</tr>`;
  });
  
  html += '</tbody></table>';
  container.innerHTML = html;
}

// ==========================================
// COLLECT DATA FROM TABLES
// ==========================================
function collectTableData(paramName, items) {
  const data = {};
  const tableId = paramName + 'Table';
  
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
// SAVE DATA - FINAL SUBMIT
// ==========================================
async function saveDataFinal() {
  const hari = document.getElementById('hari').value;
  const tanggal = document.getElementById('tanggal').value;
  const operator = document.getElementById('operator').value;
  const shift = document.getElementById('shift').value;

  if(!hari || !tanggal || !operator || !shift) {
    showNotification('Hari, tanggal, operator, dan shift harus diisi!', 'error');
    return;
  }
  
  if(!confirm('Kirim laporan final ke Google Drive?\n\nSetelah dikirim, draft akan dihapus.')) {
    return;
  }

  const saveBtn = document.getElementById('saveFinalBtn');
  saveBtn.disabled = true;
  saveBtn.textContent = '⏳ Mengirim ke Google Drive...';

  try {
    const reportData = collectFormData();

    const response = await fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify({
        action: 'saveQualityReport',
        userId: currentUser.userId,
        reportData: reportData
      })
    });

    const result = await response.json();

    if(result.success) {
      showNotification('✓ Laporan berhasil dikirim ke Google Drive!', 'success');
      
      const draftKey = `draft_kualitas_${tanggal}`;
      localStorage.removeItem(draftKey);
      updateDraftIndicator(false);
      
      clearForm();
      loadHistory();
    } else {
      showNotification('Gagal kirim: ' + result.message, 'error');
    }
  } catch(error) {
    showNotification('Error: ' + error.message, 'error');
  } finally {
    saveBtn.disabled = false;
    saveBtn.textContent = '📤 Kirim ke Google Drive';
  }
}

function clearForm() {
  const today = new Date();
  const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  
  document.getElementById('hari').value = days[today.getDay()];
  document.getElementById('tanggal').valueAsDate = today;
  document.getElementById('operator').value = '';
  document.getElementById('shift').value = '';
  document.getElementById('catatan').value = '';
  
  document.querySelectorAll('.input-table input').forEach(input => {
    input.value = '';
  });
  
  updateDraftIndicator(false);
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
        action: 'getQualityHistory',
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
            <div class="history-id">Operator: ${record.operator || '-'}</div>
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

if ('Notification' in window && Notification.permission === 'default') {
  Notification.requestPermission();
}
