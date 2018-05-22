import axios from 'axios';
import { $, $$ } from './bling';

function registerAssistance(e) {
  e.preventDefault();
  console.log(this);
  axios
    .post(this.action)
    .then(resp => {
      console.log('yay!');
      console.log(resp.data);
      console.log(this.culo)
    })
    .catch(console.error);
}

export default registerAssistance;