const passwordStatus = document.querySelector('#pass-status');
const passwordInput = document.querySelector('#password');

passwordStatus.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    passwordStatus.className = 'fas fa-eye-slash';
  } else {
    passwordInput.type = 'password';
    passwordStatus.className = 'fas fa-eye';
  }
});
