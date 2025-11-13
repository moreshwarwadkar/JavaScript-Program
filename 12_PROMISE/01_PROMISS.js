let p = new Promise((res,rej)=>{
    res("I Am Resolved");
    // rej("I Am Rejected");
})

console.log(p);


// METHOD 1 :

p.then(()=>{
    console.log('I Am Then Block');
    
})

p.catch(()=>{
    console.log('I Am Then Catch Block');
    
})

p.finally(()=>{
    console.log('I Am Then Finally Block');
    
})

// METHOD 2 :

p.then(()=>{
    console.log('I Am Then Block');
    
}).catch(()=>{
    console.log('I Am Then Catch Block');
    
}).finally(()=>{
    console.log('I Am Then Finally Block');
  
})