import '../sass/style.scss';
import showUserForm from './modules/userForms';
import { $, $$ } from './modules/bling';

const userOptions = $$('.user-form-access');
userOptions.on('click', showUserForm);