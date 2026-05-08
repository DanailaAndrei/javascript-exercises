const totalIntegers = (o) => {
    if(typeof o != "object")
        return;
    let count = 0;
    for (const [key, value] of Object.entries(o)) {
        if(Number.isInteger(value))
            count++;    
        if(typeof value == "object" && value != null)
            count += totalIntegers(value);
    }
    return count;
};
  
// Do not edit below this line
module.exports = totalIntegers;
