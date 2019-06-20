export const splitArray = array => {
    const map = new Map();
    let max = 3;
    let min = 0;
    for (let i = 1; i <= 4; i++) {
        let data = array.slice(min, max);
        map.set(i, data);
        min += 3;
        max += 3;
    }
    return map;
};
