import '../sass/style.scss';

import { $, $$ } from './modules/bling';
import displayResults from './modules/search'

const searchForm = $('form.search-location');
searchForm.on('submit', displayResults);