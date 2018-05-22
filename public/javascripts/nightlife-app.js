import '../sass/style.scss';
import { $, $$ } from './modules/bling';
import showUserForm from './modules/userForms';
// import ajaxLogin from './modules/login';
import registerAssistance from './modules/going'

const userOptions = $$('.user-form-access');
userOptions.on('click', showUserForm);

const loginButton = $('.login-button');
// loginButton.on('click', ajaxLogin)

const goingForms = $$('.going-tonight');
goingForms.on('click', registerAssistance);