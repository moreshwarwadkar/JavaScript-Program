// Promise METHODS

let p = new Promise((res, rej) => {

    console.log('Happy Birthday!!');  // Happy Birthday!!  [ IT WILL DISPLAY AFTER 5 SECONDS ]

}, 5000);  // [ 5000 : 5sec ]

// It will excute only Once.


setInterval(() => {

    console.log('setInterval');  // setInterval

}, 2000);


// It will excute again and again.