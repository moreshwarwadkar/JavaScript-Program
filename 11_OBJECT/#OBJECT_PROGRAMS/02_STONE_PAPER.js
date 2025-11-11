let val1 = Math.floor(Math.random() * 3) + 1;

// let name = prompt('Enter Your Name:');
let val2 = prompt('1.Stone 2.Paper 3.Scissor');

if (val1 == val2) {
    console.log('Tie');
}
else if (val1 == 1 && val2 == 2) {
    console.log('You Win');
}
else if (val1 == 2 && val2 == 3) {
    console.log('You Win');
}
else if (val1 == 3 && val2 == 1) {
    console.log('You Win');
}

else if (val1 == 2 && val2 == 1) {
    console.log('You Lost');
}
else if (val1 == 3 && val2 == 2) {
    console.log('You Lost');
}
else if (val1 == 1 && val2 == 3) {
    console.log('You Lost');
}

else {
    console.log('Enter Valid Choise');
}