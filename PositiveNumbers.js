function positiveNumbers(array){

  let filtered=  array.filter(function filt(num)
  {
    return num>=0;
  } )
return filtered;
}

console.log(positiveNumbers( [-3, 5, -1, 0, 8, -4, 7]));
console.log(positiveNumbers( [-1, -2, -3, -4]));
console.log(positiveNumbers( [10, 20, 30, 40]));
