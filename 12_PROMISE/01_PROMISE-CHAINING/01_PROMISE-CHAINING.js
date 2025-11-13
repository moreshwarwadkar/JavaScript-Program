// PROMISE CHAINING

let p1 = new Promise((res, rej) => {
    res('I am P1 -- Parent');
})

p1.then((v) => {
    console.log(v);
    console.log('P1 -- then');

    p2.then(() => {
        console.log('P2 -- then');
    }).catch(() => {
        console.log('P2 -- catch');
    }).finally(() => {
        console.log('P2 -- Finally');
    })

}).catch(() => {
    console.log('P1 -- catch');
}).finally(() => {
    console.log('P1 -- finally');
})


let p2 = new Promise((res,rej) => {
        res('I am P2');
    })