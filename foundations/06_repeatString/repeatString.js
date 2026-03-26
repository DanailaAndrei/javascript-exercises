const repeatString = (string, num) => {
    if (num < 0)
        return 'ERROR';

    let res = "";
    
    while(num){
        num--;
        res += string;
    }
    
    return res;
};

// Do not edit below this line
module.exports = repeatString;
