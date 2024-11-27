



function filterAdults(ourObject){

    let filterd= ourObject.filter(function (elements){
        return elements.age>18;
        })

return filterd;


}

object1= [
    { name: 'Alice', age: 17 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 16 },
    { name: 'David', age: 19 }
  ];

 console.log(filterAdults(object1));

 object2= [
    { name: 'Eve', age: 18 },
    { name: 'Frank', age: 18 },
    { name: 'Grace', age: 17 }
  ]
  console.log(filterAdults(object2));

  object3=[
    { name: 'Henry', age: 21 },
    { name: 'Ivy', age: 22 },
    { name: 'Jack', age: 23 }
  ]
  console.log(filterAdults(object3));