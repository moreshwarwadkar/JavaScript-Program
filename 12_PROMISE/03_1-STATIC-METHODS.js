// STATIC METHODS

let p1 = new Promise((res,rej)=>{
    res('I am P2');
})

let p2 = new Promise((res,rej)=>{
    res('I am P2');
})

let p3 = new Promise((res,rej)=>{
    res('I am P3');
})

Promise.allSettled(([p1,p2,p3])).then((v)=>{
    console.log(v);                     // ['I am P2', 'I am P2', 'I am P3']
    console.log('I am Then Block');     // I am Then Block

}).catch(()=>{
    console.log('I am Catch Block');

}).finally(()=>{
    console.log('FInally Block');
    
})

/* 
1) the :  Used when the Promise is fulfilled (resolved).
2) catch : Used when the Promise is rejected.
3) finally : This block always runs, whether the promise is resolved or rejected.
*/