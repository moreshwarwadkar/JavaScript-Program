// Generator Function

function * show(){  // Bounce Function
    yield 101 ;
    yield 102 ;
    yield 103 ;
}
let a = show()
console.log(a.next().value);  // 101
console.log(a.next().value);  // 102
console.log(a.next().value);  // 103
console.log(a.next().value);  // undefined