/* a function that applies 20% discount and adds tax(10%) to product prices

*/

function totalPrice(element){
    let discounted= (element.price-(element.price*0.2));
    let final=(0.1*element.price)+element.price;



    return {name:element.name, price:element.price, discounted:discounted, final:final};
}


function priceCalculator(array){
    let newPrice= array.map(totalPrice);
    return newPrice;
}

console.log(  priceCalculator( [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 300 }
  ]));