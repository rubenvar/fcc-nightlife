import axios from 'axios';

function ajaxLogin(e) {
  e.preventDefault();
  console.log(this);
  axios
    .post(this.form.action)
    .then(res => {
      console.log(res);
    })
    .catch(console.error);
}

export default ajaxLogin;