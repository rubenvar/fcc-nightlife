import '../sass/style.scss';
import { $, $$ } from './modules/bling';
import { showUserForm, closeForm } from './modules/userForms';
import registerAssistance from './modules/going';

// show register/login forms
const userOptions = $$('.user-form-access');
userOptions.on('click', showUserForm);

// close forms when click close button
const closeButton = $$('.close-form');
closeButton.on('click', closeForm);

// close forms when key Esc
const userFormContainer = $('.user-forms');
document.on('keydown', e => {
  if (userFormContainer.classList.contains('visib') && e.keyCode === 27 ) closeForm();
});

// register assistance and update count and button class
const goingForms = $$('.going-form');
goingForms.on('click', registerAssistance);