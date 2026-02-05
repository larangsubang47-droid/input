// ==========================================
// API CONFIGURATION
// ==========================================
const API_URL = 'https://script.google.com/macros/s/AKfycbzkQheaZxuWVPF3PlKMCEj-acIHddIynoPNthSuds3eTokwozi_pL6HKavg1bw11ArvGQ/exec';

// ==========================================
// DATA STRUCTURE
// ==========================================

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
let syncInterval = null; // ✅ BARU: Interval untuk sync multi-user
let lastSyncHash = null; // ✅ BARU: Hash untuk deteksi perubahan

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
  startSyncChecker(); // ✅ BARU
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
    
    // ✅ DEBUGGING: Log data yang akan disimpan
    console.log('📝 Saving draft:', {
      selectedTimes: draftData.selectedTimes,
      timeDataKeys: Object.keys(draftData.timeData || {}),
      sampleData: draftData.timeData
    });
    
    // ✅ BARU: Tambah info updater
    draftData.updatedBy = currentUser.nama || currentUser.username;
    draftData.updatedAt = new Date().toISOString();
    
    const draftKey = `draft_kualitas_${tanggal}`;
    
    localStorage.setItem(draftKey, JSON.stringify(draftData));
    localStorage.setItem('lastDraftDate_kualitas', tanggal);
    
    // ✅ BARU: Kirim ke server
    saveDraftToServer(draftData, silent);
    
    if(!silent) {
      showNotification('💾 Draft tersimpan!', 'success');
    }
    
    updateDraftIndicator(true);
    updateValidationStatus(); // ✅ BARU
  } catch(error) {
    console.error('Error saving draft:', error);
  }
}

function loadDraft() {
  try {
    const tanggal = document.getElementById('tanggal').value;
    const draftKey = `draft_kualitas_${tanggal}`;
    const draftData = localStorage.getItem(draftKey);
    
    // ✅ DEBUGGING: Log data yang dimuat
    console.log('📂 Loading draft for:', tanggal);
    console.log('📂 Draft key:', draftKey);
    
    if(draftData) {
      const data = JSON.parse(draftData);
      
      console.log('✅ Draft found:', {
        selectedTimes: data.selectedTimes,
        timeDataKeys: Object.keys(data.timeData || {}),
        hasTimeData: !!data.timeData
      });
      
      fillFormWithData(data);
      updateDraftIndicator(true);
      
      // ✅ BARU: Tampilkan info siapa yang terakhir update
      if(data.updatedBy && data.updatedAt) {
        const updateTime = new Date(data.updatedAt).toLocaleString('id-ID');
        showNotification(`📄 Draft dimuat (Terakhir: ${data.updatedBy} - ${updateTime})`, 'info');
      } else {
        showNotification('📄 Draft ditemukan dan dimuat', 'info');
      }
    } else {
      console.log('❌ No draft found');
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
    selectedTimes: selectedTimes,
    timeData: collectTimeData(),
    catatan: document.getElementById('catatan').value
  };
}

function collectTimeData() {
  const timeData = {};
  
  selectedTimes.forEach(time => {
    timeData[time] = {};
    
    Object.keys(dataStructure).forEach(param => {
      timeData[time][param] = {};
      
      dataStructure[param].forEach(sample => {
        const key = `${param}_${sample.name}`;
        const inputId = `input_${key}_${time}`;
        const input = document.getElementById(inputId);
        
        if(input) {
          timeData[time][param][sample.name] = input.value;
        }
      });
    });
  });
  
  return timeData;
}

function fillFormWithData(data) {
  if(!data) return;
  
  document.getElementById('hari').value = data.hari || '';
  document.getElementById('tanggal').value = data.tanggal || '';
  document.getElementById('operator').value = data.operator || '';
  document.getElementById('shift').value = data.shift || '';
  document.getElementById('catatan').value = data.catatan || '';
  
  if(data.selectedTimes) {
    selectedTimes = data.selectedTimes;
    updateSelectedTimes();
    
    // ✅ PERBAIKAN: Tunggu input table terbentuk dulu
    setTimeout(() => {
      if(data.timeData) {
        let filledCount = 0;
        let notFoundCount = 0;
        
        Object.keys(data.timeData).forEach(time => {
          Object.keys(data.timeData[time]).forEach(param => {
            Object.keys(data.timeData[time][param]).forEach(sampleName => {
              const key = `${param}_${sampleName}`;
              const inputId = `input_${key}_${time}`;
              const input = document.getElementById(inputId);
              
              if(input) {
                input.value = data.timeData[time][param][sampleName];
                if(data.timeData[time][param][sampleName]) {
                  filledCount++;
                }
              } else {
                notFoundCount++;
                console.warn('⚠️ Input not found:', inputId);
              }
            });
          });
        });
        
        console.log(`✅ Filled ${filledCount} fields, ${notFoundCount} not found`);
      }
      updateValidationStatus();
    }, 100);
  } else {
    updateValidationStatus();
  }
}

// ==========================================
// ✅ FITUR BARU: MULTI-USER SYNC
// ==========================================
function startSyncChecker() {
  if(syncInterval) {
    clearInterval(syncInterval);
  }
  
  syncInterval = setInterval(() => {
    checkForRemoteChanges();
  }, 10000); // Check setiap 10 detik
}

async function checkForRemoteChanges() {
  try {
    const tanggal = document.getElementById('tanggal').value;
    if(!tanggal) return;
    
    const response = await fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify({
        action: 'getLatestDraft',
        tanggal: tanggal,
        userId: currentUser.userId
      })
    });
    
    const result = await response.json();
    
    if(result.success && result.data) {
      const remoteData = result.data;
      const remoteHash = generateHash(remoteData);
      const localData = collectFormData();
      const localHash = generateHash(localData);
      
      if(lastSyncHash !== null && remoteHash !== localHash && remoteHash !== lastSyncHash) {
        showSyncNotification(remoteData);
      }
      
      lastSyncHash = remoteHash;
    }
  } catch(error) {
    console.log('Sync check error (normal jika offline):', error);
  }
}

function generateHash(data) {
  const str = JSON.stringify(data);
  let hash = 0;
  for(let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return hash.toString();
}

function showSyncNotification(remoteData) {
  const syncBar = document.getElementById('syncNotification');
  if(syncBar) {
    syncBar.style.display = 'block';
    syncBar.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <span>🔄 ${remoteData.updatedBy || 'User lain'} baru mengubah data (${new Date(remoteData.updatedAt).toLocaleTimeString('id-ID')})</span>
        <div>
          <button onclick="loadRemoteData()" class="btn btn-sm" style="margin-right: 8px;">📥 Muat Data Terbaru</button>
          <button onclick="dismissSync()" class="btn btn-sm">❌ Abaikan</button>
        </div>
      </div>
    `;
  }
}

function loadRemoteData() {
  loadDraft();
  dismissSync();
  showNotification('✅ Data terbaru berhasil dimuat', 'success');
}

function dismissSync() {
  const syncBar = document.getElementById('syncNotification');
  if(syncBar) {
    syncBar.style.display = 'none';
  }
}

async function saveDraftToServer(draftData, silent = false) {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify({
        action: 'saveDraft',
        userId: currentUser.userId,
        draftData: draftData
      })
    });
    
    const result = await response.json();
    
    if(!silent && result.success) {
      console.log('✅ Draft synced to server');
    }
  } catch(error) {
    console.log('Draft sync skipped (offline mode)');
  }
}

// ==========================================
// ✅ FITUR BARU: VALIDASI INPUT
// ==========================================
function validateForm() {
  const errors = [];
  
  if(!document.getElementById('hari').value.trim()) {
    errors.push('Hari harus diisi');
  }
  if(!document.getElementById('tanggal').value) {
    errors.push('Tanggal harus diisi');
  }
  if(!document.getElementById('operator').value.trim()) {
    errors.push('Operator/Petugas harus diisi');
  }
  if(!document.getElementById('shift').value) {
    errors.push('Shift harus dipilih');
  }
  
  if(selectedTimes.length === 0) {
    errors.push('Minimal 1 jam pemeriksaan harus dipilih');
  }
  
  const emptyFields = [];
  selectedTimes.forEach(time => {
    Object.keys(dataStructure).forEach(param => {
      dataStructure[param].forEach(sample => {
        const key = `${param}_${sample.name}`;
        const inputId = `input_${key}_${time}`;
        const input = document.getElementById(inputId);
        
        if(input && !input.value.trim()) {
          emptyFields.push(`${param} - ${sample.name} (${time})`);
          input.classList.add('input-error');
        } else if(input) {
          input.classList.remove('input-error');
        }
      });
    });
  });
  
  if(emptyFields.length > 0) {
    errors.push(`${emptyFields.length} field data kualitas masih kosong`);
  }
  
  return {
    isValid: errors.length === 0,
    errors: errors,
    emptyCount: emptyFields.length
  };
}

function updateValidationStatus() {
  const totalFields = selectedTimes.length * getTotalSamples();
  const filledFields = getFilledFieldsCount();
  const emptyFields = totalFields - filledFields;
  
  const statusDiv = document.getElementById('validationStatus');
  if(statusDiv) {
    const percentage = totalFields > 0 ? Math.round((filledFields / totalFields) * 100) : 0;
    
    statusDiv.innerHTML = `
      <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
        <span><strong>Progress Pengisian:</strong></span>
        <span><strong>${filledFields} / ${totalFields} field</strong> (${percentage}%)</span>
      </div>
      <div style="background: #e0e0e0; height: 20px; border-radius: 10px; overflow: hidden;">
        <div style="background: ${percentage === 100 ? '#4caf50' : '#ff9800'}; height: 100%; width: ${percentage}%; transition: width 0.3s;"></div>
      </div>
      ${emptyFields > 0 ? `<div style="margin-top: 8px; color: #f44336;">⚠️ ${emptyFields} field masih kosong</div>` : '<div style="margin-top: 8px; color: #4caf50;">✅ Semua field sudah terisi</div>'}
    `;
  }
}

function getTotalSamples() {
  let total = 0;
  Object.keys(dataStructure).forEach(param => {
    total += dataStructure[param].length;
  });
  return total;
}

function getFilledFieldsCount() {
  let filled = 0;
  
  selectedTimes.forEach(time => {
    Object.keys(dataStructure).forEach(param => {
      dataStructure[param].forEach(sample => {
        const key = `${param}_${sample.name}`;
        const inputId = `input_${key}_${time}`;
        const input = document.getElementById(inputId);
        
        if(input && input.value.trim() !== '') {
          filled++;
        }
      });
    });
  });
  
  return filled;
}

// ==========================================
// TIME SELECTION
// ==========================================
function updateSelectedTimes() {
  const shift = document.getElementById('shift').value;
  const checkboxContainer = document.getElementById('timeCheckboxes');
  
  if(!shift) {
    checkboxContainer.innerHTML = '<p style="color:#999;">Pilih shift terlebih dahulu</p>';
    selectedTimes = [];
    buildInputTable();
    return;
  }
  
  const timeOptions = {
    '1': ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00'],
    '2': ['14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
    '3': ['22:00', '23:00', '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00'] // ✅ SHIFT 3 DITAMBAHKAN
  };
  
  const times = timeOptions[shift] || [];
  
  let html = '<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 10px;">';
  times.forEach(time => {
    const checked = selectedTimes.includes(time) ? 'checked' : '';
    html += `
      <label class="time-checkbox">
        <input type="checkbox" value="${time}" ${checked} onchange="toggleTime('${time}')">
        <span>${time}</span>
      </label>
    `;
  });
  html += '</div>';
  
  checkboxContainer.innerHTML = html;
  buildInputTable();
}

function toggleTime(time) {
  const index = selectedTimes.indexOf(time);
  if(index > -1) {
    selectedTimes.splice(index, 1);
  } else {
    selectedTimes.push(time);
  }
  
  selectedTimes.sort();
  buildInputTable();
  saveDraft(true);
}

// ==========================================
// BUILD INPUT TABLE
// ==========================================
function buildInputTable() {
  const container = document.getElementById('inputTable');
  
  if(selectedTimes.length === 0) {
    container.innerHTML = '<p style="text-align:center; color:#999; padding:40px;">Pilih minimal 1 waktu pemeriksaan</p>';
    return;
  }
  
  let html = '<div class="input-table">';
  
  // Header
  html += '<div class="table-header">';
  html += '<div class="param-cell"><strong>Parameter</strong></div>';
  html += '<div class="sample-cell"><strong>Sampel</strong></div>';
  html += '<div class="satuan-cell"><strong>Satuan</strong></div>';
  html += '<div class="std-cell"><strong>Standar</strong></div>';
  
  selectedTimes.forEach(time => {
    html += `<div class="time-cell"><strong>${time}</strong></div>`;
  });
  
  html += '</div>';
  
  // Rows
  Object.keys(dataStructure).forEach(param => {
    dataStructure[param].forEach((sample, idx) => {
      html += '<div class="table-row">';
      
      if(idx === 0) {
        html += `<div class="param-cell" style="grid-row: span ${dataStructure[param].length};">${param}</div>`;
      }
      
      html += `<div class="sample-cell">${sample.name}</div>`;
      html += `<div class="satuan-cell">${sample.satuan}</div>`;
      
      const std = sample.std_min !== '' || sample.std_max !== '' 
        ? `${sample.std_min}${sample.std_max !== '' ? ' - ' + sample.std_max : ''}` 
        : '-';
      html += `<div class="std-cell">${std}</div>`;
      
      selectedTimes.forEach(time => {
        const key = `${param}_${sample.name}`;
        const inputId = `input_${key}_${time}`;
        
        html += `<div class="input-cell">
          <input type="number" 
                 step="0.01" 
                 id="${inputId}" 
                 class="data-input" 
                 placeholder="0.00"
                 onchange="saveDraft(true); updateValidationStatus();"
                 onblur="updateValidationStatus();">
        </div>`;
      });
      
      html += '</div>';
    });
  });
  
  html += '</div>';
  
  container.innerHTML = html;
}

// ==========================================
// LOGIN & USER MANAGEMENT
// ==========================================
async function handleLogin(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;
  const loginBtn = document.getElementById('loginBtn');
  
  if(!username || !password) {
    showNotification('Username dan password harus diisi', 'error');
    return;
  }
  
  loginBtn.disabled = true;
  loginBtn.textContent = 'Memproses...';
  
  try {
    // OFFLINE MODE - Bypass login check
    const offlineUser = {
      userId: 'offline_' + Date.now(),
      username: username,
      nama: username,
      role: 'operator'
    };
    
    currentUser = offlineUser;
    localStorage.setItem('currentUser_kualitas', JSON.stringify(currentUser));
    showMainApp();
    showNotification('Login berhasil! (Offline Mode)', 'success');
    
    loginBtn.disabled = false;
    loginBtn.textContent = 'Masuk';
    return;
    
    // ONLINE MODE - code dibawah tidak akan dijalankan
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
      currentUser = result.data.user;
      localStorage.setItem('currentUser_kualitas', JSON.stringify(currentUser));
      showMainApp();
      showNotification('Login berhasil!', 'success');
    } else {
      showNotification('Login gagal: ' + result.message, 'error');
    }
  } catch(error) {
    showNotification('Error: ' + error.message, 'error');
  } finally {
    loginBtn.disabled = false;
    loginBtn.textContent = 'Masuk';
  }
}

function logout() {
  if(confirm('Yakin ingin logout?')) {
    localStorage.removeItem('currentUser_kualitas');
    currentUser = null;
    
    if(autoSaveInterval) clearInterval(autoSaveInterval);
    if(syncInterval) clearInterval(syncInterval); // ✅ BARU
    
    document.getElementById('loginScreen').classList.remove('hidden');
    document.getElementById('mainApp').classList.add('hidden');
  }
}

function showMainApp() {
  document.getElementById('loginScreen').classList.add('hidden');
  document.getElementById('mainApp').classList.remove('hidden');
  document.getElementById('userName').textContent = currentUser.nama || currentUser.username;
}

// ==========================================
// SAVE FINAL DATA
// ==========================================
async function saveDataFinal() {
  const saveBtn = document.getElementById('saveFinalBtn');
  
  // ✅ VALIDASI WAJIB
  const validation = validateForm();
  
  if(!validation.isValid) {
    let errorMsg = '❌ Validasi Gagal:\n\n';
    validation.errors.forEach(err => {
      errorMsg += `• ${err}\n`;
    });
    errorMsg += '\n⚠️ Silakan lengkapi semua field yang ditandai merah!';
    
    alert(errorMsg);
    
    const firstError = document.querySelector('.input-error');
    if(firstError) {
      firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      firstError.focus();
    }
    
    return;
  }
  
  if(!confirm('Kirim laporan ke Google Drive?\n\n✅ Semua data sudah terisi lengkap.')) {
    return;
  }
  
  saveBtn.disabled = true;
  saveBtn.textContent = '⏳ Mengirim...';
  
  try {
    const reportData = collectFormData();
    const tanggal = reportData.tanggal;

    // OFFLINE MODE - Simpan ke localStorage
    if(true) {
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
  updateValidationStatus(); // ✅ BARU
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
