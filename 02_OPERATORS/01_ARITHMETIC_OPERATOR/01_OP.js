// Arithmetic Operator
/*
| **Operator** | **Name**                | **Example**    | **Result (if a = 10, b = 3)** |
| ------------ | ----------------------- | -------------- | ----------------------------- |
| `+`          | Addition                | `a + b`        | `13`                          |
| `-`          | Subtraction             | `a - b`        | `7`                           |
| `*`          | Multiplication          | `a * b`        | `30`                          |
| `/`          | Division                | `a / b`        | `3.333...`                    |
| `%`          | Modulus (Remainder)     | `a % b`        | `1`                           |
| `**`         | Exponentiation (Power)  | `a ** b`       | `1000`                        |
| `++`         | Increment (adds 1)      | `a++` or `++a` | `11` (after increment)        |
| `--`         | Decrement (subtracts 1) | `a--` or `--a` | `9` (after decrement)         |

*/

let a = 10;
let b = 3;

console.log(a + b);  // 13  → Addition
console.log(a - b);  // 7   → Subtraction
console.log(a * b);  // 30  → Multiplication
console.log(a / b);  // 3.333... → Division
console.log(a % b);  // 1   → Modulus (Remainder)
console.log(a ** b); // 1000 → Exponentiation (Power)

// Increment operator
a++; // increases value of a by 1
console.log(a);  // 11

// Decrement operator
b--; // decreases value of b by 1

console.log(b);  // 2
