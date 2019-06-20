import { sortByBirthday } from './sortByBirthday.js';
import { createElement } from './createElement.js';
import { img } from './request.js';

export const createListCast = (el, index, arrayOfCast) => {
    const div = createElement('div');
    const h2 = createElement('h2');
    const photo = createElement('img');

    h2.textContent = el;
    div.appendChild(h2);
    photo.src = img[index];
    photo.alt = el;

    const ol = createElement('ol');

    if (arrayOfCast.length !== 0) {
        let sortedArrayCast = sortByBirthday(arrayOfCast);

        for (let i = 0; i < sortedArrayCast.length; i++) {
            const li = createElement('li');

            let name = sortedArrayCast[i].person.name;

            li.textContent = name;
            ol.appendChild(li);
            div.appendChild(photo);
            div.appendChild(ol);
        }
    } else {
        const p = createElement('p');
        p.textContent = 'Sorry is not information about cast';
        div.appendChild(photo);
        div.appendChild(p);
    }
    div.classList.add('list');
    return div;
};
