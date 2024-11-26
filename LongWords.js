function filterLongWords(arr){
    
    let filtered=arr.filter(function(element){
        return element.length>5;
    })
return filtered;
    }

    console.log(filterLongWords(['apple', 'banana', 'cherry', 'date', 'elderberry'])
    )
   

    console.log(filterLongWords( ['cat', 'dog', 'elephant', 'fox', 'butterfly'])
)
    
    
   
console.log(filterLongWords( ['a', 'be', 'cat', 'dog', 'mouse']
    )
)