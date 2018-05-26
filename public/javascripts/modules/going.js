import axios from 'axios';
// import { $, $$ } from './bling';

function registerAssistance(e) {
  e.preventDefault();
  console.log(this);
  const number = this.childNodes[0].querySelector('.number');
  console.log(number);
  axios
    .post(this.action)
    .then(resp => {
      console.log(resp.data);
      this.classList.toggle('going-confirmed');
      console.log(this);
      if (this.classList.contains('going-confirmed')) {
        number.innerHTML = parseInt(number.innerHTML) + 1;
      } else {
        number.innerHTML = parseInt(number.innerHTML) - 1;
      }
    })
    .catch(console.error);
}

export default registerAssistance;