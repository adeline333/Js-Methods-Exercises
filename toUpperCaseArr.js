function upperAndAdd (arr){
    let upper="";
    let length=0;
    let final=[];
   for(let i=0;i<arr.length;i++){
  upper+= arr[i].toUpperCase();
  length=upper.length;
   }
 
   return final=[{name:upper}, {length:length}];
}


function toUpperCaseArr(array){
    let newArray= array.map(upperAndAdd );
    return newArray;
   
}
console.log(toUpperCaseArr(['alice', 'bob', 'charlie']));
console.log(toUpperCaseArr(['']));
console.log(toUpperCaseArr(['Ana', 'Bob', 'C']));
