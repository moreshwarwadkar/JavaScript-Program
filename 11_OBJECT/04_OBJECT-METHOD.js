// OBJECT METHOD

let emp = {
    name: 'ABC',
    age: 22,
    city: 'Pune'
}

console.log(emp);

// OP : { name: 'ABC', age: 22, city: 'Pune' }

let emp1 = Object.keys(emp);
console.log(emp1);  //  ['name', 'age', 'city']

let emp2 = Object.values(emp);
console.log(emp);  // {name: 'ABC', age: 22, city: 'Pune'}

// Object.freeze(emp);

/*
-> We Cannot Add, Remove, Update anything in the object.
*/

emp.age = 30;  // Update Age
emp.state = 'Maharashtra';  // Add New Key and Value
console.log(emp);  // {name: 'ABC', age: 30, city: 'Pune', state: 'Hello'}
// console.log(Object.isFrozen);  // isFrozen() { [native code] }


// Object.seal(emp);  
// console.log(Object.isSealed);  // isSealed() { [native code] }


/* 
-> When we use Object.seal() then we can able to Update values. 
-> We cannot add or remove new values in a Object 
*/

/* ----- ***** *****  ----- */

let product = {
    name : 'Puma',
    pirce : 2000
}

let p = Object.assign(product)
p.name = 'Nike'
console.log(product);  // {name: 'Nike', pirce: 2000}
console.log(p);  // {name: 'Nike', pirce: 2000}

