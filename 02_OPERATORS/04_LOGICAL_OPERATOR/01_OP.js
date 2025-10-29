// Logical Operator

let a = 10;
let b = 5;
let c = 20;

console.log(a > b && c > a); // true (both conditions true)
console.log(a > b || a > c); // true (one condition true)
console.log(!(a > b));       // false (because a > b is true)