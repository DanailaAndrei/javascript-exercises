const fibonacci = function(n) {
    n = Number(n);
    if(n == 0)
        return 0;
    if(n < 0)
        return "OOPS";
    if(n <= 2)
        return 1;
    let a = 1, b = 1;
    while(n >= 3){
        let aux = b;
        b = a + b;
        a = aux;
        n--;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
