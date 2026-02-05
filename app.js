// ==========================================
// DEBUG LOGIN FUNCTION
// ==========================================
async function handleLogin(event) {
  event.preventDefault();
  
  console.log('=== LOGIN DEBUG START ===');
  
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;
  const loginBtn = document.getElementById('loginBtn');
  
  console.log('1. Username:', username);
  console.log('2. Password:', password ? '***' : '(empty)');
  
  if(!username || !password) {
    console.log('❌ Validation failed: empty fields');
    showNotification('Username dan password harus diisi', 'error');
    return;
  }
  
  loginBtn.disabled = true;
  loginBtn.textContent = 'Memproses...';
  
  console.log('3. API URL:', API_URL);
  
  try {
    console.log('4. Sending request...');
    
    const requestData = {
      action: 'login',
      username: username,
      password: password
    };
    
    console.log('5. Request data:', requestData);
    
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain'
      },
      body: JSON.stringify(requestData)
    });
    
    console.log('6. Response status:', response.status);
    console.log('7. Response OK:', response.ok);
    
    const responseText = await response.text();
    console.log('8. Response text:', responseText);
    
    let result;
    try {
      result = JSON.parse(responseText);
      console.log('9. Parsed result:', result);
    } catch(parseError) {
      console.error('❌ JSON parse error:', parseError);
      console.log('Raw response:', responseText);
      showNotification('Server response error: ' + parseError.message, 'error');
      return;
    }
    
    if(result.success) {
      console.log('✅ Login SUCCESS!');
      console.log('10. User data:', result.data);
      
      currentUser = result.data;
      localStorage.setItem('currentUser_kualitas', JSON.stringify(currentUser));
      
      console.log('11. Showing main app...');
      showMainApp();
      showNotification('Login berhasil!', 'success');
      
      // Load draft setelah login
      console.log('12. Loading draft from server...');
      setTimeout(() => {
        loadDraftFromServer();
      }, 500);
    } else {
      console.log('❌ Login FAILED:', result.message);
      showNotification('Login gagal: ' + result.message, 'error');
    }
  } catch(error) {
    console.error('❌ CATCH ERROR:', error);
    console.error('Error name:', error.name);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    
    showNotification('Error: ' + error.message + ' - Cek console untuk detail', 'error');
  } finally {
    loginBtn.disabled = false;
    loginBtn.textContent = 'Masuk';
    console.log('=== LOGIN DEBUG END ===');
  }
}
