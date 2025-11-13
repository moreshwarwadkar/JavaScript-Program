// STATIC METHODS

let p1 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res('I am P1');
    },3000)
})

let p2 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res('I am P2');
    },2000)
})

let p3 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res('I am P3');
    },1000)
})

Promise.any(([p1,p2,p3])).then((v)=>{
    console.log(v);                    
    console.log('I am Then Block');    

}).catch(()=>{
    console.log('I am Catch Block');

}).finally(()=>{
    console.log('FInally Block');
    
})

