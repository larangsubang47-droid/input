// Global variable to store all data
let formData = {
    date: '',
    day: '',
    operatorShift1: '',
    operatorShift2: '',
    cleanWater: {},
    pressureIntake: {},
    wdc: {}
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    loadSavedData();
});

// Initialize app with current date and time
function initializeApp() {
    const now = new Date();
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 
                    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    
    const dayName = days[now.getDay()];
    const date = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    
    document.getElementById('currentDay').textContent = dayName;
    document.getElementById('currentDate').textContent = `${date} ${month} ${year}`;
    
    formData.date = `${year}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
    formData.day = dayName;
}

// Setup event listeners
function setupEventListeners() {
    // Operator name inputs
    document.getElementById('operatorShift1').addEventListener('input', function(e) {
        formData.operatorShift1 = e.target.value;
    });
    
    document.getElementById('operatorShift2').addEventListener('input', function(e) {
        formData.operatorShift2 = e.target.value;
    });
    
    // All input fields
    const inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach(input => {
        input.addEventListener('change', handleInputChange);
    });
    
    // Night time selectors
    document.getElementById('nightTimeSelector').addEventListener('change', function() {
        generateNightInputs('cleanWater', 'nightDataContainer');
    });
    
    document.getElementById('nightTimeSelector2').addEventListener('change', function() {
        generateNightInputs('pressureIntake', 'nightDataContainer2');
    });
    
    document.getElementById('nightTimeSelector3').addEventListener('change', function() {
        generateNightInputs('wdc', 'nightDataContainer3');
    });
}

// Handle input changes
function handleInputChange(e) {
    const category = e.target.dataset.category;
    const param = e.target.dataset.param;
    const time = e.target.dataset.time;
    const value = e.target.value;
    
    if (!formData[category]) {
        formData[category] = {};
    }
    
    if (!formData[category][param]) {
        formData[category][param] = {};
    }
    
    formData[category][param][time] = value;
    
    // Auto-save to localStorage
    localStorage.setItem('waterProductionData', JSON.stringify(formData));
}

// Tab switching function
function openTab(evt, tabName) {
    const tabContents = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active');
    }
    
    const tabButtons = document.getElementsByClassName('tab-button');
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove('active');
    }
    
    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.classList.add('active');
}

// Generate night shift inputs
function generateNightInputs(section, containerId) {
    const container = document.getElementById(containerId);
    const timeSelector = containerId === 'nightDataContainer' ? 'nightTimeSelector' : 
                         containerId === 'nightDataContainer2' ? 'nightTimeSelector2' : 'nightTimeSelector3';
    const selectedTime = document.getElementById(timeSelector).value;
    
    let html = '<div class="section"><h4>Data untuk ' + selectedTime + '</h4><table class="data-table"><tbody>';
    
    if (section === 'cleanWater') {
        html += generateNightRow('Level Air - Air Baku Intake', 'Mdpl', 'levelAir', 'airBakuIntake', selectedTime);
        html += generateNightRow('Level Air - Reservoir', 'cm', 'levelAir', 'reservoir', selectedTime);
        html += generateNightRow('Flow/Debit - Inlet WTP', 'Lps', 'flowDebit', 'inletWTP', selectedTime);
        html += generateNightRow('Flow/Debit - Outlet WTP', 'Lps', 'flowDebit', 'outletWTP', selectedTime);
        html += generateNightRow('Pressure Distribusi - Pompa 1', 'Bar', 'pressureDistribusi', 'pompa1', selectedTime);
        html += generateNightRow('Pressure Distribusi - Pompa 2', 'Bar', 'pressureDistribusi', 'pompa2', selectedTime);
        html += generateNightRow('Pressure Distribusi - Pompa 3', 'Bar', 'pressureDistribusi', 'pompa3', selectedTime);
        html += generateNightRow('Hz Distribusi - Pompa 1', 'Hz', 'hzDistribusi', 'pompa1', selectedTime);
        html += generateNightRow('Hz Distribusi - Pompa 2', 'Hz', 'hzDistribusi', 'pompa2', selectedTime);
        html += generateNightRow('Hz Distribusi - Pompa 3', 'Hz', 'hzDistribusi', 'pompa3', selectedTime);
    } else if (section === 'pressureIntake') {
        html += generateNightRow('Pressure Intake - Pompa 1', 'Bar', 'pressureIntake', 'pompa1', selectedTime);
        html += generateNightRow('Pressure Intake - Pompa 2', 'Bar', 'pressureIntake', 'pompa2', selectedTime);
        html += generateNightRow('Pressure Intake - Pompa 3', 'Bar', 'pressureIntake', 'pompa3', selectedTime);
        html += generateNightRow('Hz Intake - Pompa 1', 'Hz', 'hzIntake', 'pompa1', selectedTime);
        html += generateNightRow('Hz Intake - Pompa 2', 'Hz', 'hzIntake', 'pompa2', selectedTime);
        html += generateNightRow('Hz Intake - Pompa 3', 'Hz', 'hzIntake', 'pompa3', selectedTime);
    } else if (section === 'wdc') {
        html += generateNightRow('Level WDC (%)', 'Persen', 'wdc', 'levelWDC', selectedTime);
        html += generateNightRow('LPS OUT WDC', 'LPS', 'wdc', 'lpsOutWDC', selectedTime);
    }
    
    html += '</tbody></table></div>';
    container.innerHTML = html;
    
    // Add event listeners to new inputs
    const newInputs = container.querySelectorAll('input[type="number"]');
    newInputs.forEach(input => {
        input.addEventListener('change', handleInputChange);
        
        // Load saved value if exists
        const category = input.dataset.category;
        const param = input.dataset.param;
        const time = input.dataset.time;
        if (formData[category] && formData[category][param] && formData[category][param][time]) {
            input.value = formData[category][param][time];
        }
    });
}

// Generate night row
function generateNightRow(label, unit, category, param, time) {
    const value = formData[category] && formData[category][param] && formData[category][param][time] 
                  ? formData[category][param][time] : '';
    
    return `
        <tr>
            <td style="width: 40%;">${label}</td>
            <td style="width: 15%;">${unit}</td>
            <td style="width: 45%;">
                <input type="number" step="0.01" 
                       data-category="${category}" 
                       data-param="${param}" 
                       data-time="${time}"
                       value="${value}">
            </td>
        </tr>
    `;
}

// Save data to localStorage
function saveData() {
    try {
        localStorage.setItem('waterProductionData', JSON.stringify(formData));
        showMessage('Data berhasil disimpan ke browser!', 'success');
    } catch (error) {
        showMessage('Gagal menyimpan data: ' + error.message, 'error');
    }
}

// Load saved data from localStorage
function loadSavedData() {
    try {
        const savedData = localStorage.getItem('waterProductionData');
        if (savedData) {
            formData = JSON.parse(savedData);
            
            // Load operator names
            if (formData.operatorShift1) {
                document.getElementById('operatorShift1').value = formData.operatorShift1;
            }
            if (formData.operatorShift2) {
                document.getElementById('operatorShift2').value = formData.operatorShift2;
            }
            
            // Load all input values
            const inputs = document.querySelectorAll('input[type="number"]');
            inputs.forEach(input => {
                const category = input.dataset.category;
                const param = input.dataset.param;
                const time = input.dataset.time;
                
                if (formData[category] && formData[category][param] && formData[category][param][time]) {
                    input.value = formData[category][param][time];
                }
            });
            
            showMessage('Data berhasil dimuat dari penyimpanan browser', 'info');
        }
    } catch (error) {
        console.error('Error loading saved data:', error);
    }
}

// Send data to Google Sheets
function sendToGoogleSheets() {
    // Validate data
    if (!formData.operatorShift1 || !formData.operatorShift2) {
        showMessage('Harap isi nama operator shift 1 dan shift 2!', 'error');
        return;
    }
    
    showMessage('Mengirim data ke Google Sheets...', 'info');
    
    // Replace with your Google Apps Script Web App URL
    const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
    
    fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        showMessage('Data berhasil dikirim ke Google Sheets!', 'success');
        // Optional: Clear form after successful submission
        // clearForm();
    })
    .catch(error => {
        showMessage('Gagal mengirim data: ' + error.message, 'error');
    });
}

// Show status message
function showMessage(message, type) {
    const statusDiv = document.getElementById('statusMessage');
    statusDiv.textContent = message;
    statusDiv.className = type;
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        statusDiv.style.display = 'none';
    }, 5000);
}

// Clear form
function clearForm() {
    if (confirm('Apakah Anda yakin ingin menghapus semua data?')) {
        formData = {
            date: formData.date,
            day: formData.day,
            operatorShift1: '',
            operatorShift2: '',
            cleanWater: {},
            pressureIntake: {},
            wdc: {}
        };
        
        localStorage.removeItem('waterProductionData');
        
        // Clear all inputs
        document.querySelectorAll('input').forEach(input => {
            input.value = '';
        });
        
        showMessage('Semua data telah dihapus', 'info');
    }
}

// Export functions to global scope
window.openTab = openTab;
window.saveData = saveData;
window.sendToGoogleSheets = sendToGoogleSheets;
window.clearForm = clearForm;