const removeFromArray = (arr, ...nr) => {
    return arr.filter(elem => !nr.includes(elem));
};

// Do not edit below this line
module.exports = removeFromArray;
