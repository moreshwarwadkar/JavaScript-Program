// 

let i = 1;
function show() {
    if (i <= 5) {
        console.log('I Am Recursive Function');
        i++;
        show();
    }
}

show();