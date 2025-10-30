// Logical Operator

/*
| **Operator** | **Name**    | **Description**                                        | **Example (a = true, b = false)** | **Result**                                           |    |   |    |        |
| ------------ | ----------- | ------------------------------------------------       | --------------------------------- | ---------------------------------------------------- | -- | - | -- | ------ |
| `&&`         | Logical AND | Returns `true` if **both** conditions are true         | `a && b`                          | `false`                                              |    |   |    |        |
| `\\'         | Logical OR  | Returns `true` if **at least one** condition is true   | 'a || b'                          |  'true'
| `!`          | Logical NOT | Reverses the result (true → false, false → true)       | `!a`                              | `false`                                              |    |   |    |        |

*/
let a = 10;
let b = 5;
let c = 20;

console.log(a > b && c > a); // true (both conditions true)
console.log(a > b || a > c); // true (one condition true)

console.log(!(a > b));       // false (because a > b is true)
