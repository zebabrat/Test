export const sortByBirthday = arrayCastofShow => {
    const ifBirthdayEquallyNull = '3000-00-00';

    arrayCastofShow.sort(function(a, b) {
        if (a.person.birthday === null) {
            a.person.birthday = ifBirthdayEquallyNull;
        }
        if (b.person.birthday === null) {
            b.person.birthday = ifBirthdayEquallyNull;
        }
        return (
            a.person.birthday.split('-').join('') -
            b.person.birthday.split('-').join('')
        );
    });
    return arrayCastofShow;
};
