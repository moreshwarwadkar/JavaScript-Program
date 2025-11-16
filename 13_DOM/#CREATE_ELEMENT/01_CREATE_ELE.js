/* CREATE ELEMENT */

let root = document.getElementById("root");
let newElement = document.createElement("h1");  // To Create New Element

newElement.innerText = "I am using Create Element";  // Here we add the data inside H1 Tag
console.log(newElement);
newElement.setAttribute("id","new");  // Here we set 'id' along with 'id name (new)'

root.appendChild(newElement);  // To Link
