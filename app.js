// ==========================================
// API CONFIGURATION
// ==========================================
const API_URL = 'https://script.google.com/macros/s/AKfycbw8r-ubStcSwSzRTLIId46FfRCkezILrLkC0veNQBlOuaryp2I-BNTT_rWJvl--lMgIKQ/exec';

// ==========================================
// DA// ==========================================

const dataStructure = {
  'Kekeruhan': [
    { name: 'Air Baku', satuan: 'NTU', std_min: 0, std_max: '' },
    { name: 'Air Aerasi', satuan: 'NTU', std_min: 0, std_max: '' },
    { name: 'SCADA Air Baku', satuan: 'NTU', std_min: 0, std_max: '' },
    { name: 'Sedimentasi Plant 1', satuan: 'NTU', std_min: 0, std_max: 2 },
    { name: 'Sedimentasi Plant 2', satuan: 'NTU', std_min: 0, std_max: 2 },
    { name: 'Sedimentasi Plant 3', satuan: 'NTU', std_min: 0, std_max: 4 },
    { name: 'Sedimentasi Plant 4', satuan: 'NTU', std_min: 0, std_max: 1.5 },
    { name: 'Outlet Filter Plant 1', satuan: 'NTU', std_min: 0, std_max: 1.5 },
    { name: 'Outlet Filter Plant 2', satuan: 'NTU', std_min: 0, std_max: 1.5 },
    { name: 'Outlet Filter Plant 3', satuan: 'NTU', std_min: 0, std_max: 1.5 },
    { name: 'Outlet Filter Plant 4', satuan: 'NTU', std_min: 0, std_max: 1.5 },
    { name: 'Reservoir', satuan: 'NTU', std_min: 0, std_max: 1.5 },
    { name: 'Distribusi Campuran', satuan: 'NTU', std_min: 0, std_max: '' },
    { name: 'SCADA Distribusi', satuan: 'NTU', std_min: 0, std_max: 1.5 }
  ],
  'pH': [
    { name: 'Air Baku', satuan: 'pH', std_min: 6, std_max: 9 },
    { name: 'SCADA Air Baku', satuan: 'pH', std_min: 6, std_max: 9 },
    { name: 'Sedimentasi Plant 1', satuan: 'pH', std_min: 6.5, std_max: 8 },
    { name: 'Sedimentasi Plant 2', satuan: 'pH', std_min: 6.5, std_max: 8 },
    { name: 'Sedimentasi Plant 3', satuan: 'pH', std_min: 6.5, std_max: 8 },
    { name: 'Sedimentasi Plant 4', satuan: 'pH', std_min: 6.5, std_max: 7.5 },
    { name: 'Outlet Filter Plant 1', satuan: 'pH', std_min: 6.5, std_max: 7.5 },
    { name: 'Outlet Filter Plant 2', satuan: 'pH', std_min: 6.5, std_max: 7.5 },
    { name: 'Outlet Filter Plant 3', satuan: 'pH', std_min: 6.5, std_max: 8.5 },
    { name: 'Outlet Filter Plant 4', satuan: 'pH', std_min: 6.5, std_max: 8.5 },
    { name: 'Reservoir', satuan: 'pH', std_min: 6.5, std_max: 8.5 },
    { name: 'Distribusi Campuran', satuan: 'pH', std_min: 6.5, std_max: 8.5 },
    { name: 'SCADA Distribusi', satuan: 'pH', std_min: 6.5, std_max: 8.5 }
  ],
  'Temperatur': [
    { name: 'Air Baku', satuan: '°C', std_min: '', std_max: '' },
    { name: 'Udara', satuan: '°C', std_min: '', std_max: '' },
    { name: 'Distribusi Campuran', satuan: '°C', std_min: '', std_max: '' },
    { name: 'Udara (Distribusi)', satuan: '°C', std_min: '', std_max: '' }
  ],
  'Warna': [
    { name: 'Air Baku', satuan: 'PtCo', std_min: 0, std_max: '' },
    { name: 'Distribusi Campuran', satuan: 'PtCo', std_min: 0, std_max: 10 }
  ],
  'DHL': [
    { name: 'Air Baku', satuan: 'µS/cm', std_min: '', std_max: '' },
    { name: 'Distribusi Campuran', satuan: 'µS/cm', std_min: '', std_max: '' }
  ],
  'Ammonium': [
    { name: 'Air Baku', satuan: 'mg/L', std_min: 0, std_max: 1 },
    { name: 'Outlet Aerasi', satuan: 'mg/L', std_min: 0, std_max: 1.5 },
    { name: 'Outlet Filter Plant 1', satuan: 'mg/L', std_min: 0, std_max: 1.5 },
    { name: 'Outlet Filter Plant 2', satuan: 'mg/L', std_min: 0, std_max: 1.5 },
    { name: 'Outlet Filter Plant 3', satuan: 'mg/L', std_min: 0, std_max: 1.5 },
    { name: 'Outlet Filter Plant 4', satuan: 'mg/L', std_min: 0, std_max: 1.5 },
    { name: 'Distribusi Campuran', satuan: 'mg/L', std_min: 0, std_max: 1.5 }
  ],
  'Mangan': [
    { name: 'Air Baku', satuan: 'mg/L', std_min: 0, std_max: 0.5 },
    { name: 'Outlet Aerasi', satuan: 'mg/L', std_min: 0, std_max: 0.5 },
    { name: 'Outlet Filter Plant 1', satuan: 'mg/L', std_min: 0, std_max: 0.4 },
    { name: 'Outlet Filter Plant 2', satuan: 'mg/L', std_min: 0, std_max: 0.4 },
    { name: 'Outlet Filter Plant 3', satuan: 'mg/L', std_min: 0, std_max: 0.4 },
    { name: 'Outlet Filter Plant 4', satuan: 'mg/L', std_min: 0, std_max: 0.4 },
    { name: 'Reservoir', satuan: 'mg/L', std_min: 0, std_max: 0.1 },
    { name: 'Distribusi Campuran', satuan: 'mg/L', std_min: 0, std_max: 0.1 }
  ],
  'Besi': [
    { name: 'Air Baku', satuan: 'mg/L', std_min: 0, std_max: 5 },
    { name: 'Outlet Aerasi', satuan: 'mg/L', std_min: 0, std_max: 5 },
    { name: 'Outlet Filter Plant 1', satuan: 'mg/L', std_min: 0, std_max: 1 },
    { name: 'Outlet Filter Plant 2', satuan: 'mg/L', std_min: 0, std_max: 1 },
    { name: 'Outlet Filter Plant 3', satuan: 'mg/L', std_min: 0, std_max: 1 },
    { name: 'Outlet Filter Plant 4', satuan: 'mg/L', std_min: 0, std_max: 1 },
    { name: 'Reservoir', satuan: 'mg/L', std_min: 0, std_max: 1 },
    { name: 'Distribusi Campuran', satuan: 'mg/L', std_min: 0, std_max: 1 }
  ],
  'Sisa Chlor': [
    { name: 'Outlet Filter Plant 1', satuan: 'mg/L', std_min: 0.2, std_max: 0.5 },
    { name: 'Outlet Filter Plant 2', satuan: 'mg/L', std_min: 0.2, std_max: 0.5 },
    { name: 'Outlet Filter Plant 3', satuan: 'mg/L', std_min: 0.2, std_max: 0.5 },
    { name: 'Outlet Filter Plant 4', satuan: 'mg/L', std_min: 0.2, std_max: 0.5 },
    { name: 'Reservoir', satuan: 'mg/L', std_min: 0.2, std_max: 0.5 },
    { name: 'Distribusi Campuran', satuan: 'mg/L', std_min: 0.2, std_max: 0.5 }
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
  setTimeout(() => {
    loadDraft();
  }, 200);
  
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
  return {
    hari: document.getElementById('hari').value,
    tanggal: document.getElementById('tanggal').value,
    operator: document.getElementById('operator').value,
    shift: document.getElementById('shift').value,
    kualitasData: collectTableData('kualitasAirTable'),
    catatan: document.getElementById('catatan').value,
    selectedTimes: selectedTimes
  };
}

function fillFormWithData(data) {
  document.getElementById('hari').value = data.hari || '';
  document.getElementById('tanggal').value = data.tanggal || '';
  document.getElementById('operator').value = data.operator || '';
  document.getElementById('shift').value = data.shift || '';
  document.getElementById('catatan').value = data.catatan || '';
  
  // Fill table data
  if(data.kualitasData) {
    fillTableData('kualitasAirTable', data.kualitasData);
  }
}

function fillTableData(tableId, data) {
  if(!data) return;
  
  // Data format: { "Kekeruhan_Air Baku": { "08:00": 5.2 }, ... }
  for(const [key, timeData] of Object.entries(data)) {
    // Parse key untuk mendapatkan parameter dan item name
    // Key format: "PARAMETER_Jenis Sampel"
    for(const [time, value] of Object.entries(timeData)) {
      const inputId = `${key}_${time.replace(':', '')}`.replace(/\s+/g, '_');
      const input = document.getElementById(inputId);
      if(input && value !== null && value !== undefined) {
        input.value = value;
      }
    }
  }
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

  // OFFLINE MODE - Hardcoded login untuk testing
  // Hapus ini kalau sudah ada backend
  if(username === 'admin' && password === 'admin123') {
    currentUser = {
      userId: 'ADM001',
      nama: 'Administrator',
      role: 'admin'
    };
    localStorage.setItem('currentUser_kualitas', JSON.stringify(currentUser));
    showNotification('Login berhasil! (Offline Mode)', 'success');
    showMainApp();
    return;
  } else if(username === 'user' && password === 'user123') {
    currentUser = {
      userId: 'USR001',
      nama: 'User Operator',
      role: 'user'
    };
    localStorage.setItem('currentUser_kualitas', JSON.stringify(currentUser));
    showNotification('Login berhasil! (Offline Mode)', 'success');
    showMainApp();
    return;
  }

  // Online mode - pakai backend API
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
    showNotification('Username/password salah (Offline Mode aktif)', 'error');
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
  
  // Force update selected times first
  updateSelectedTimes();
  
  // Then initialize tables
  setTimeout(() => {
    initializeTables();
  }, 100);
  
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
  
  createKualitasTable();
}

function createKualitasTable() {
  const container = document.getElementById('kualitasAirTable');
  if (!container) return;
  
  let html = '<table class="input-table"><thead><tr>';
  html += '<th>Parameter</th><th>Jenis Sampel</th><th>Satuan</th><th>Min</th><th>Max</th>';
  
  selectedTimes.forEach(time => {
    html += `<th>${time}</th>`;
  });
  
  html += '</tr></thead><tbody>';
  
  for(const [paramGroup, items] of Object.entries(dataStructure)) {
    items.forEach((item, index) => {
      html += `<tr>`;
      
      if(index === 0) {
        html += `<td rowspan="${items.length}"><strong>${paramGroup}</strong></td>`;
      }
      
      html += `<td>${item.name}</td>`;
      html += `<td>${item.satuan}</td>`;
      html += `<td>${item.std_min !== '' ? item.std_min : '-'}</td>`;
      html += `<td>${item.std_max !== '' ? item.std_max : '-'}</td>`;
      
      selectedTimes.forEach(time => {
        const inputId = `${paramGroup}_${item.name}_${time.replace(':', '')}`.replace(/\s+/g, '_');
        html += `<td><input type="number" id="${inputId}" step="0.01" placeholder="0"></td>`;
      });
      
      html += `</tr>`;
    });
  }
  
  html += '</tbody></table>';
  container.innerHTML = html;
}

// ==========================================
// COLLECT DATA FROM TABLES
// ==========================================
function collectTableData(tableId) {
  const data = {};
  
  // FORMAT YANG BENAR UNTUK BACKEND:
  // Key format: "PARAMETER_Jenis Sampel" (dengan underscore)
  // Value: { "08:00": value, "12:00": value }
  
  for(const [paramGroup, items] of Object.entries(dataStructure)) {
    items.forEach(item => {
      // Buat key dengan format: "Parameter_Jenis Sampel"
      const key = `${paramGroup}_${item.name}`;
      data[key] = {};
      
      selectedTimes.forEach(time => {
        const inputId = `${paramGroup}_${item.name}_${time.replace(':', '')}`.replace(/\s+/g, '_');
        const input = document.getElementById(inputId);
        if (input && input.value) {
          // Simpan dengan key waktu asli (dengan titik dua)
          data[key][time] = parseFloat(input.value);
        }
      });
    });
  }
  
  return data;
}

// ==========================================
// SAVE DATA - FINAL SUBMIT
// ==========================================
async function saveDataFinal() {
  const hari = document.getElementById('hari').value;
  const tanggal = document.getElementById('tanggal').value;

  if(!hari || !tanggal) {
    showNotification('Hari dan tanggal harus diisi!', 'error');
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
    
    // DEBUG: Log data yang akan dikirim
    console.log('=== DATA YANG AKAN DIKIRIM ===');
    console.log('selectedTimes:', reportData.selectedTimes);
    console.log('kualitasData keys:', Object.keys(reportData.kualitasData));
    console.log('Sample data:', JSON.stringify(reportData.kualitasData, null, 2).substring(0, 500));
    console.log('Full reportData:', reportData);

    // Cek apakah API_URL sudah diisi
    if(!API_URL || API_URL.includes('YOUR_DEPLOYMENT_ID_HERE')) {
      console.warn('API_URL belum dikonfigurasi, menggunakan OFFLINE MODE');
      
      // OFFLINE MODE - Simpan ke localStorage
      const offlineReports = JSON.parse(localStorage.getItem('offline_reports_kualitas') || '[]');
      const recordId = 'RPT' + Date.now();
      
      offlineReports.push({
        recordId: recordId,
        userId: currentUser.userId,
        hari: reportData.hari,
        tanggal: reportData.tanggal,
        operator: reportData.operator,
        shift: reportData.shift,
        reportData: reportData,
        createdAt: new Date().toISOString()
      });
      
      localStorage.setItem('offline_reports_kualitas', JSON.stringify(offlineReports));
      
      showNotification('✓ Laporan tersimpan! (Offline Mode)', 'success');
      
      const draftKey = `draft_kualitas_${tanggal}`;
      localStorage.removeItem(draftKey);
      updateDraftIndicator(false);
      
      clearForm();
      loadHistory();
      
      saveBtn.disabled = false;
      saveBtn.textContent = '📤 Kirim ke Google Drive';
      return;
    }

    // ONLINE MODE - Kirim ke Google Apps Script
    console.log('Mengirim ke API:', API_URL);
    const response = await fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify({
        action: 'saveQualityReport',
        userId: currentUser.userId,
        reportData: reportData
      })
    });

    const result = await response.json();
    console.log('Response dari server:', result);

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
    console.error('Error saat menyimpan:', error);
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
    // OFFLINE MODE - Load dari localStorage
    const offlineReports = JSON.parse(localStorage.getItem('offline_reports_kualitas') || '[]');
    
    if(offlineReports.length === 0) {
      historyList.innerHTML = '<div style="text-align:center; padding:40px; color:#999;">Belum ada laporan (Offline Mode)</div>';
      return;
    }

    // Filter by user role
    let records = offlineReports;
    if(currentUser.role !== 'admin') {
      records = offlineReports.filter(r => r.userId === currentUser.userId);
    }
    
    // Sort by date (newest first)
    records.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    
    let html = '';
    records.forEach(record => {
      const date = new Date(record.createdAt).toLocaleString('id-ID');
      
      html += `
        <div class="history-item" onclick="viewDetail('${record.recordId}')">
          <div class="history-header">
            <span class="history-date">${date}</span>
            <span class="status-badge status-aktif">📄 Offline</span>
          </div>
          <div class="history-name">${record.hari}, ${record.tanggal}</div>
          <div class="history-id">Operator: ${record.operator || '-'}</div>
        </div>
      `;
    });

    historyList.innerHTML = html;
    return;
    
    // Online mode - code dibawah tidak akan dijalankan
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
            <div class="history-id">Operator: ${record.operator}</div>
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
