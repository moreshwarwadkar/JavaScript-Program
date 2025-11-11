// NESTED FUNCTIN : CLOSURE
// Create a function that remembers a user’s name and prints a greeting each time it’s called.

function greet(){
    let greet  = 'Hello';

    function uname(){
        let uname = 'Unik';

        console.log(greet,' '+uname);
        
    }

    uname()
}

greet();

// OP : Hello Unik