// Assignment Operator

/*
| **Operator** | **Name**            | **Example** | **Same As**  | **Result (if a = 10, b = 5)** |
| ------------ | ------------------- | ----------- | ------------ | ----------------------------- |
| `=`          | Simple Assignment   | `a = b`     | —            | `a = 5`                       |
| `+=`         | Add and Assign      | `a += b`    | `a = a + b`  | `15`                          |
| `-=`         | Subtract and Assign | `a -= b`    | `a = a - b`  | `5`                           |
| `*=`         | Multiply and Assign | `a *= b`    | `a = a * b`  | `50`                          |
| `/=`         | Divide and Assign   | `a /= b`    | `a = a / b`  | `2`                           |
| `%=`         | Modulus and Assign  | `a %= b`    | `a = a % b`  | `0`                           |
| `**=`        | Exponent and Assign | `a **= b`   | `a = a ** b` | `100000`                      |

*/

let x = 10;

x += 5;   // x = 15
x -= 3;   // x = 12
x *= 2;   // x = 24
x /= 4;   // x = 6
x %= 4;   // x = 2
x **= 3;  // x = 8

console.log(x);

