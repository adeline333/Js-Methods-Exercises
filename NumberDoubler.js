function squareNum(array){
    let squared= array.map(function (element){
        return element*element;
    })
    return squared;
}

console.log(squareNum([2, 4, 6, 8, 10]));