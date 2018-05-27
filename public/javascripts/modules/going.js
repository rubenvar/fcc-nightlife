import axios from 'axios';
import { $, $$ } from './bling';

function registerAssistance(e) {
  e.preventDefault();
  if (this.classList.contains('no-user')) {
    $('.user-forms').classList.add('visib');
    $('.login-form').classList.add('visib');
    return;
  }
  const number = this.childNodes[0].querySelector('.number');
  axios
    .post(this.action)
    .then(resp => {
      this.classList.toggle('going-confirmed');
      if (this.classList.contains('going-confirmed')) {
        number.innerHTML = parseInt(number.innerHTML) + 1;
      } else {
        number.innerHTML = parseInt(number.innerHTML) - 1;
      }
    })
    .catch(console.error);
}

export default registerAssistance;