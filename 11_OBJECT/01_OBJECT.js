let emp = {
    name: "Unik",
    age: 23
}
console.log(emp);  
// OP: {name: 'Unik', age: 23}

emp.state = "Maharashtra";  // INSERT
emp.city = "Pune";
console.log(emp);  
// OP: {name: 'Unik', age: 23, state: 'Maharashtra', city: 'Pune'}

emp.name = "Pranav";  // UPDATE
console.log(emp);  
// OP: {name: 'Pranav', age: 23, state: 'Maharashtra', city: 'Pune'}

delete emp.age;  // DELETE
console.log(emp);  
// OP: {name: 'Pranav', state: 'Maharashtra', city: 'Pune'}
console.log(emp.name);  // TO FETCH ONE RECORD
// OP: Pranav 




// SECOND WAY TO CREATE OBJECT : USING OBJECT CONSTRUCTOR

let emp1 = new Object();
console.log(emp1);  // {}
emp1.name = "UniK";
emp1.state = "Maharashtra";
console.log(emp1);  // {name: 'UniK', state: 'Maharashtra'}


// TASK -- GIVEN IN A CLASS

let data = {
    student: "Anish",
    skills: ["HTML","CSS","JAVASCRIPT"]
}

data.skills.map((a)=>{
    console.log(a);
})

/* OP: 
HTML
CSS
JAVASCRIPT
*/