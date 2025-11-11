//

function sum(a, b, c) {  // High Level Function
    let sum = a + b;
    return c(sum);
}

function disp(z){  // CallBack Function
    console.log(z);
    
}

sum(10,20,disp);

// High Level Function : A Function which accepts another function as an Argument.
// CallBack Function : A Function which is passed as an Argument in another Function.