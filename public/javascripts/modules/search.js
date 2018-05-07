import axios from 'axios';
import { $ } from './bling';

function displayResults(e) {
  e.preventDefault();
  const resultArea = $('.results');
  resultArea.innerHTML = 'Loading...';
  axios
    .post(this.action, {
      location: this.location.value
    })
    .then(res => {
      const places = res.data.businesses;

      resultArea.innerHTML = '';
      $('.search-location').classList.add('hidden');
      places.forEach(place => {
        console.log(place);
        let catTags = '';
        place.categories.forEach(cat => {
          catTags += `<span class="tag">${cat.title}</span> `;
        });
        const image = place.image_url || '/images/pub.jpg';
        resultArea.innerHTML += `
          <li class="place">
            <img src="${image}" alt="${place.name}"/>
            <div class="text">
              <h3><a href="${place.url}" target="_blank">${place.name}</a></h3>
              <div class="details">
                <p>${catTags}
                ${place.rating}, with ${place.review_count} ratings.</p>
              </div>
            </div>
            <div class="user"><button></div>
          </li>`;
        // TODO: get the image url, change the end to 'ms' instead of 'o' so it will be smaller
      });
      resultArea.innerHTML += '<button type="submit"><p>New Search</p></button>';
    })
    .catch(console.error)
}

export default displayResults;