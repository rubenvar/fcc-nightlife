import { $, $$ } from './bling';

const container = $('.user-forms');
const loginForm = $('.login-form');
const registerForm = $('.register-form');

function showUserForm(e) {
  e.preventDefault();
  container.classList.add('visib');

  if (this.classList.contains('login')) {
    loginForm.classList.add('visib');
    registerForm.classList.remove('visib');
  } else if (this.classList.contains('register')) {
    registerForm.classList.add('visib');
    loginForm.classList.remove('visib');
  }
}

function closeForm(e) {
  container.classList.remove('visib');
  loginForm.classList.remove('visib');
  registerForm.classList.remove('visib');
}

export { showUserForm, closeForm };