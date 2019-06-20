import { createElement } from './createElement.js';
import { splitArray } from './splitArray.js';

export const container = document.getElementById('root');

export const makePagination = (length, list) => {
    const boxShow = createElement('div');
    const listOfPages = createElement('ul');
    listOfPages.classList.add('list-of-pages');
    boxShow.classList.add('list-show');

    const map = splitArray(list);

    for (let i = 1; i < length + 1; i++) {
        const li = createElement('li');
        li.classList.add('link');

        const link = createElement('a');
        link.textContent = i;
        link.href = '#';
        link.value = i;

        li.appendChild(link);
        listOfPages.appendChild(li);

        li.addEventListener('click', function(e) {
            boxShow.innerHTML = '';
            e.target.style.color = 'blue';
            for (let id of map.keys()) {
                if (e.target.value === id) {
                    map.get(id).forEach(el => {
                        boxShow.appendChild(el);
                    });
                }
            }

            container.appendChild(boxShow);
            container.appendChild(listOfPages);
        });
    }
    map.get(1).forEach(el => {
        boxShow.appendChild(el);
    });
    container.appendChild(boxShow);
    container.appendChild(listOfPages);
};
