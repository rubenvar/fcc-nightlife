import '../sass/style.scss';
import { $, $$ } from './modules/bling';
import { showUserForm, closeForm } from './modules/userForms';
import ajaxLogin from './modules/login';
import registerAssistance from './modules/going';

// show register/login forms
const userOptions = $$('.user-form-access');
userOptions.on('click', showUserForm);

// close forms when click close button
const closeButton = $$('.close-form');
closeButton.on('click', closeForm);

// close forms when click outside (not working properly)
const userFormContainer = $('.user-forms');
// userFormContainer.on('click', closeForm);

// close forms when key Esc
document.on('keydown', e => {
  if (userFormContainer.classList.contains('visib') && e.keyCode === 27 ) closeForm();
});

const loginButton = $('.login-button');
// loginButton.on('click', ajaxLogin);

// register assistance and update count and button class
const goingForms = $$('.going-form');
goingForms.on('click', registerAssistance);

// const placeResults = $$('.place');
// placeResults.on('mouseover', function() {
//   this.classList.add('inter');
// });
// placeResults.on('mouseout', function() {
//   this.classList.remove('inter');
// })