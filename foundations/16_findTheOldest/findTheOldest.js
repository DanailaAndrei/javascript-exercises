const findTheOldest = function(arr) {
    let maxAge = 0, currentYear = new Date().getFullYear(), index = 0;

    arr.forEach((elem, ind) => {
        let age;
        if(elem.hasOwnProperty("yearOfDeath"))
            age = elem.yearOfDeath - elem.yearOfBirth;
        else age = currentYear - elem.yearOfBirth;
        if(maxAge < age){
            maxAge = age;
            index = ind;
        }
    });

    return arr[index];
};

// Do not edit below this line
module.exports = findTheOldest;
