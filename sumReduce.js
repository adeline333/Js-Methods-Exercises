//array.reduce(callback function, initial value)
// callbackfunction(initial value,current, index, array )
function ourReduced(array){
        
    let sum=array.reduce(function (accumulator,current_value){
       return accumulator+current_value;
    },0);
    return sum;
}

console.log(ourReduced([1, 2, 3, 4, 5]));