let passwords = document.querySelector('.password-info');
let firstInput = document.querySelector('#password');
let secondInput = document.querySelector('#confirmPassword');

passwords.addEventListener('keyup', checkMatch);

function checkMatch() {
  if (firstInput.value === '' | secondInput.value === '') {
    passwords.classList.add('error');
    return;
  }

  if (firstInput.value === secondInput.value) {
    passwords.classList.remove('error');
    return;
  }

  passwords.classList.add('error');
}