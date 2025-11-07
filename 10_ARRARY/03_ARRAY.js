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
// FETCH FOOD WHICH CONTAIN CH

let food = ["chicken chilli", "Pasta", "Paneer chilli", "Poha", "Corn & cheej Pizza", "Gulab Jamun", "French Fries"];
let ar6 = food.filter((e)=>{
    return e.includes("ch");
})

console.log(ar6);  // ['chicken chilli', 'Paneer chilli', 'Corn & cheej Pizza', 'French Fries']

// ----------

console.log('---------- OTHER METHODS ----------');


let ar7 = [3,4,5,6,7,9];
let ar8 = ar7.some((a) =>{  // The some() method checks if at least one element in the array passes a given test (returns true).
    return a>8
})
console.log(ar8);  // TRUE

let ar9 = ar7.every((a)=>{  // The every() method checks if all elements in the array pass a given test (return true).
    return a>2
})
console.log(ar9);  // TRUE

let arr5  = ['HTML', ['CSS',['JS',['REACT JS']]]];
console.log(arr5);  // ['HTML', Array(2)]
let arr6 = arr5.flat(3);  // IT WILL MERGE ALL NESTED ARRAY IN A PARENT ARRAY
console.log(arr6);  
// O/P: ['HTML', 'CSS', 'JS', 'REACT JS']


let arr7 = [1,2,3,4,5];
arr7.reverse();  // IT IS USED TO REVERSE THE ORDER OF AN ARRAY ELEMENTS
console.log(arr7);  //  [5, 4, 3, 2, 1]


// REVERSE STRING 

let str = 'JSPIDERS';
console.log(str);  // JSPIDERS

let arr8 = str.split("");  
console.log(arr8);
arr8.reverse();  // ['J', 'S', 'P', 'I', 'D', 'E', 'R', 'S']

let reversed = arr8.join("");
console.log(reversed);  // SREDIPSJ

let str2 = "JavaScript";
let arr9 = Array.from(str2);  // IT WILL CONVERT STRING INTO ARRAY
console.log(arr9);  // ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']

let arr10 = ['HTML', 'CSS', 'JAVASCRIPT', 'BOOTSTRAP', 'REACT JS'];
let arr11 = arr10.fill('JAVA',1,4);  // The fill() method is used to replace items in an array with one fixed value, starting from one position and ending before another.
console.log(arr11);  // ['HTML', 'JAVA', 'JAVA', 'JAVA', 'REACT JS']

let arr12 = [1,2,3,4,5];
let arr13 = arr.toString();  // IT WILL CONVERT ARRAY INTO STRING
console.log(arr13);  // 1,2,3,4,5


// REDUCE METHOD [ IMPORTANT METHOD ]

let iv = 0
let arr14 = [1,2,3,4,5];
let arr15 = arr14.reduce((acc,cv)=>(acc+cv),iv);
console.log(arr15);  // 15

let ival = 1
let arr16 = arr14.reduce((acc,cv)=>(acc*cv),ival);
console.log(arr16);  // 120
