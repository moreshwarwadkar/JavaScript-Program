// ARRAY METHODS

let arr = ["HTML", "CSS", "JAVASCRIPT", "BOOTSTRAP", "TAILWIND_CSS", "RACT_JAS"];

console.log(arr.length);  // COUNT THE LENGTH --> 6

arr.push("JAVA","SQL");  // ADD ELEMENTS AT THE LAST POSITION
console.log(arr);

arr.pop();  // REMOVE LAST ELEMENT IN ARRAY
console.log(arr);  

arr.unshift("Python", "DJANGO");  // ADD ELEMENT IN ARRAY IN A STARTING INDEX
console.log(arr);  

arr.shift();
console.log(arr);  // REMOVE FIRST ELEMENT IN ARRAY

let arr1 = arr.slice(1,4);  // DISPLAY ELEMENTS FROM INDEX 1 TO 3 (EXCLUDE LAST INDEX)
console.log(arr1);  

arr.splice(2,2);  // IT REMOVES 2 ELEMENT FROM 2 SECOND INDEX (FIRST VALUE: STRATING INDEX, SECOND VALUE: NUMBER OF VALUES WE HAVE TO DELETE)
console.log(arr);  

arr.splice(2,2,"JDBC","HIBERNATE","AWS");  // IT WILL REMOVE THAT PERTICULAR ELEMENTS AND ADD NEW ELEMENTS IN THAT POSITION
console.log(arr);

// ---------- ***** ----------

let ar1 = [1,2,3,4,5];
let ar2 = [6,7,8,9,];
console.log(ar1.concat(ar2)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

let ar = ["HTML", "JAVA", "PYTHON", "HTML"];
console.log(ar.includes("PYTHON"));  // IT WILL CHECK PYTHON IS IN THE ARRAY OR NOT --> TRUE

console.log(ar.indexOf("HTML",1));  // CHECK THE INDEX VALUE OF 'HTML'. IT WILL START SEARCHING FROM INDEX VALUE 1. --> 3
console.log(ar.lastIndexOf("HTML",3)); // CHECK THE INDEX VALUE OF 'HTML'. IT WILL START SEARCHING FROM INDEX VALUE 3 (REVERSE ORDER)--> 0. -->