/*
| **Type**                 | **Hoisted?**                       | **Value before initialization** |
| ------------------------ | ---------------------------------  | ------------------------------- |
| `var`                    | ✅ Yes                             | `undefined`                    |
| `let`                    | ✅ Yes (but in temporal dead zone) | ❌ ReferenceError              |
| `const`                  | ✅ Yes (but in temporal dead zone) | ❌ ReferenceError              |
| `function` (declaration) | ✅ Yes                             | Works normally                  |
| `function` (expression)  | ⚠️ Partially                       | ❌ TypeError                    |

*/


/* ----- 1. Variable Hoisting ----- */

// When we use var
console.log(a); // It is Showing --> undefined
var a = 10;

// Similarly
var a;
console.log(a); // undefined
a = 10;

// When we use let and const
console.log(b); // It is Showing -->  ReferenceError
console.log(c); // It is Showing -->  ReferenceError
let b = 20;
const c = 30;

/* ----- 2. Function Hoisting ----- */

greet(); // Output: Hello!

function greet() {
  console.log("Hello!");
}

// Here we Store the function then we call

sayHi(); // TypeError

var sayHi = function() {
  console.log("Hi!");
};

