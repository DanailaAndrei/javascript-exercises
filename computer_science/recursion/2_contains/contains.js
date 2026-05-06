const contains = (o, v) => {
    let ok = false;
    for (const p in o) {
        if(o[p] instanceof Object)
            ok = contains(o[p], v);
        if(ok == true)
            return true;
        if(o[p] === v || (Number.isNaN(v) && Number.isNaN(o[p])))
            return true;
    }
    return ok;
};

// Do not edit below this line
module.exports = contains;
