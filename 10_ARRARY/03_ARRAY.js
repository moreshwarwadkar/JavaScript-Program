// ----- IMPORTANT -----


// ----- MAP -----

let arr = [1,2,3,4,5];

arr.map((a)=> {     
    console.log(a);
});

// ----- MAP -----

let arr1 = arr.map((a)=>{
    return a+5;
})
console.log(arr1);  //  [6, 7, 8, 9, 10]

// ----- FILTER -----

let ar = [9,2,1,4,6,3,5,0,4,8,11];

let ar1 = ar.filter((a)=>{
    return a>4;
});
console.log(ar1);

// ----- FILTER -----

let ar2 = ar.filter((b)=>{
    return b%2==0;
});
console.log(ar2);

// ----- INTERVIEW LEVEL QUESTION -----

// QUESTION IS TO PRINT :  [290, 220, 330, 310] FROM FOLLOWING

let ar3 = [190,110, 120, 230, 82, 103, 210];
let ar4 = ar3.filter((c)=>{
    return c>110 
})

let ar5 = ar4.map((d)=>{
    return d+100
})
console.log(ar5)  // [290, 220, 330, 310]

// ----------

let food = ["chicken chilli", "Pasta", "Paneer chilli", "Poha", "Corn & cheej Pizza", "Gulab Jamun", "French Fries"];
let ar6 = food.filter((e)=>{
    return e.includes("ch");
})

console.log(ar6);
