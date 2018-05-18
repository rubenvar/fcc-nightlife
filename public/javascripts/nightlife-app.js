import '../sass/style.scss';
import showUserForm from './modules/userForms';
// import ajaxLogin from './modules/login';
import { $, $$ } from './modules/bling';

const userOptions = $$('.user-form-access');
userOptions.on('click', showUserForm);

const loginButton = $('.login-button');
// loginButton.on('click', ajaxLogin)