function sorting(array){
    let sorted= array.sort(function (a,b){
         return a-b;}
    ) ;
    return sorted;
}

const numbers = [23, 12, 45, 6, 2, 91, 34];

console.log(sorting(numbers));