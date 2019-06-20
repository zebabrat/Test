import {
    requestData,
    allListCast,
    allListMovieTitle,
    img
} from './components/request.js';
import { createList } from './components/createList.js';
import { container } from './components/makePagination.js';

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('./sw_cached.js')
            .then(req => console.log('worked'))
            .catch(err => console.log(err));
    });
}

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

let inputValue = '';

searchInput.addEventListener('input', e => {
    inputValue = '';
    inputValue = e.target.value;
});

searchForm.addEventListener('submit', e => {
    e.preventDefault();
    container.innerHTML = '';
    allListMovieTitle.length = 0;
    img.length = 0;
    allListCast.length = 0;
    requestData(inputValue);
    setTimeout(() => {
        createList(allListMovieTitle, allListCast);
    }, 500);
});
