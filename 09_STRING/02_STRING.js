// METHODS IN JS

let str = "JavaScript";
console.log(str.length);  //10
console.log(str.toLowerCase());  //javascript
console.log(str.toUpperCase());  //JAVASCRIPT
console.log(str.at(-6));  //IT CAN BE ACCEPT +ve and -ve VALUES (S)
console.log(str.charAt(6));  //IT CAN BE ACCEPT ONLY +ve VALUES (r)

console.log(str.charCodeAt(1));  // ASCII VALUE OF CHARACTER a --> 97 [ WHICH IS PRESENT ON IN INDEX 1 ] 

let st1 = 'Helppppp';
let st2 = 'Helppppp';

console.log(st1.replace('p','lo'));  //REPLACE ONLY FIRST OCCURANCE
console.log(st2.replaceAll('p','lo'))  //REPLACE ALL OCCURANCE

let st3 = "Java";
let st4 = "Script";
let st5 = "SQL";


console.log(st3.concat(st4));  //   o/p --> JavaScript
console.log(st3.concat(st4,st5));  // o/p --> JavaScriptSQL.

let st6 = "Java"
console.log(str.repeat(5)); // JavaScriptJavaScriptJavaScriptJavaScriptJavaScript

let rating = 3;
console.log("❤️".repeat(rating),"🖤".repeat(5-rating));

let s1 = "Java"
let s2 = "Script"
console.log(s1.padStart(10,s2));  // ScriptJava

console.log(s1.padStart(11,s2));  // ScriptSJava

console.log(s1.padEnd(10,s2));  //  JavaScript

console.log(s1.padEnd(11,s2));  // JavaScriptS

/*
padStart() adds characters to the beginning (left side) of a string until it reaches the given length.

padEnd() adds characters to the end (right side) of the string until it reaches the given length.

*/