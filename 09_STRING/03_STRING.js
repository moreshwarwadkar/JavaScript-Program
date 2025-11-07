let str = "           JavaScript is a Part of WebTech";
let str1 = "JavaScript is a Part of WebTech          ";

console.log(str1);
console.log(str+"_Java");  //[ IT WILL CONCAT TWO STRINGS ]
console.log(str.trimStart() + "_Java");  // [ IT WILL REMOVE STARTING OF THE SPACE ]
console.log(str1.trimEnd() + "_Java");  // [ IT WILL REMOVE ENDING OF THE SPACE THEN MERGE]
console.log(str.trim()+"_Java");  // [ REMOVE SPACE FROM BOTH SIDE ]

let st = "JavaScript";

console.log(st.startsWith("Java"));  // t
console.log(st.endsWith("Script"));  // t
console.log(st.includes("JavaS"));  // t

let st1 = "JavaScript";

console.log(st1.indexOf("a",2)); // DISPLAY INDEX VALUE --> 3
console.log(st1.lastIndexOf("a",2)); //

console.log(st1.split(""));
console.log(st1.split(" "));

console.log(st1.slice(3,8));
console.log(st1.substring(3,7));
console.log(st1.substr(3,7));
