import { createListCast } from './createListCast.js';
import { makePagination } from './makePagination.js';

export const createList = (allListMovieTitle, allListCast) => {
    const list = [];
    const lengthCast = allListCast.length;

    allListMovieTitle.forEach((el, index) => {
        if (index <= lengthCast) {
            let listOfCast = createListCast(el, index, allListCast[index]);
            list.push(listOfCast);
        }
    });

    let countOfPage = Math.ceil(allListMovieTitle.length / 3);
    makePagination(countOfPage, list);
};
