export let allListMovieTitle = [];
export let img = [];
export let allListCast = [];

export const requestData = resultInputSearch => {
    fetch(`http://api.tvmaze.com/search/shows?q=${resultInputSearch}`)
        .then(data => data.json())
        .then(data => {
            data.forEach(el => {
                allListMovieTitle.push(el.show.name);
                !el.show.image
                    ? img.push(null)
                    : img.push(el.show.image.medium);
                searchForId(el.show.id);
            });
        });
};

const searchForId = id => {
    fetch(`http://api.tvmaze.com/shows/${id}/cast`)
        .then(casts => casts.json())
        .then(cast => {
            allListCast.push(cast);
        });
};
