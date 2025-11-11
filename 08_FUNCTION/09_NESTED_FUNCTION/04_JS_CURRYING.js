// NESTED FUNCTION : JS CURRYING

function num(){
    let n = 10;
    console.log('This is Outer Function');
    
    function check(){
        if (n > 0){
            console.log('Positive Number');
        }
        else{
            console.log('Negative Number');
        }
    }
    return check
}
num()()

/*
 OP : 
 
This is Outer Function
Positive Number

*/