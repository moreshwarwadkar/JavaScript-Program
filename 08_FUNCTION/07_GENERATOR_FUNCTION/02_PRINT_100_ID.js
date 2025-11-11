// PRINT 1-100 ID

function * show(){
    for(let i=1; i<=100; i++){
        yield i;
    }
}

let a = show();

for(let i=1; i<=100; i++){
    console.log(a.next().value);
}

// IT WILL PRINT 1-100  