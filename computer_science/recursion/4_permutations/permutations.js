const factorial = (n) => {
  if(n == 0)
    return 1;
  return n * factorial(n-1);
}

const permutations = (arr) => {
  if(arr.length < 2)
    return [arr];

  let res = [];
  const nr = arr.length;
  const p = factorial(nr);
  const it = p / nr;
  let count = 0;
  let ind = 0;
  let perm;

  for(let i = 0; i < p; i++){
    if(count == it){
	    count = 0; 
      ind++;
    }
      
    res.push([arr[ind]]);
    
    if(count == 0)
      perm = permutations(arr.toSpliced(ind, 1));
    
    res[i].push(...perm[count]);    
    count++;      
   }

  return res;
};
  
// Do not edit below this line
module.exports = permutations;
