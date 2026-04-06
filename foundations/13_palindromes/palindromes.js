const palindromes = function (str) {
    str = [...str].filter(el => ".,:; !?".indexOf(el) == -1).join("").toLowerCase();
    return str == [...str].reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
