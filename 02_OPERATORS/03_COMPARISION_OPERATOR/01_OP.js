//Comparision Operator

/*
| **Operator** | **Name**                                  | **Example (a = 10, b = 5)** | **Result** |
| ------------ | ----------------------------------------- | --------------------------- | ---------- |
| `==`         | Equal To                                  | `a == b`                    | `false`    |
| `===`        | Strict Equal To (checks value + type)     | `a === b`                   | `false`    |
| `!=`         | Not Equal To                              | `a != b`                    | `true`     |
| `!==`        | Strict Not Equal To (checks value + type) | `a !== b`                   | `true`     |
| `>`          | Greater Than                              | `a > b`                     | `true`     |
| `<`          | Less Than                                 | `a < b`                     | `false`    |
| `>=`         | Greater Than or Equal To                  | `a >= b`                    | `true`     |
| `<=`         | Less Than or Equal To                     | `a <= b`                    | `false`    |

*/

let x = 10;
let y = 5;
let z = "10";

console.log(x == z);   // true  (same value)
console.log(x === z);  // false (different type)
console.log(x != y);   // true  (values not equal)
console.log(x > y);    // true
console.log(x < y);    // false
console.log(x >= y);   // true
console.log(x <= y);   // false

