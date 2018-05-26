import '../sass/style.scss';
import { $, $$ } from './modules/bling';
import { showUserForm, closeForm } from './modules/userForms';
import ajaxLogin from './modules/login';
import registerAssistance from './modules/going';

const userOptions = $$('.user-form-access');
userOptions.on('click', showUserForm);

const closeButton = $$('.close-form');
closeButton.on('click', closeForm);

const userFormContainer = $('.user-forms');
// userFormContainer.on('click', closeForm);

document.on('keydown', e => {
  if (userFormContainer.classList.contains('visib') && e.keyCode === 27 ) closeForm();
});

const loginButton = $('.login-button');
// loginButton.on('click', ajaxLogin);

const goingForms = $$('.going-form');
goingForms.on('click', registerAssistance);