const pascal = (n) => {
    if(n < 2)
        return [1];
   
    let res = [], before = [0, ...pascal(n-1), 0];

    for(let i = 0; i < n; i++){
        res.push(before[i] + before[i+1]);            
    }

    return res;
};
  
// Do not edit below this line
module.exports = pascal;
