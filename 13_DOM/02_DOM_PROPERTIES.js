// 4 PROPERTIES

let root = document.getElementById("root");
console.log(root);  
// OP Display On a Console :  <div id="root"></div>

root.innerHTML = "I am using innerHTML";
/*
This OP Display On a Browser : I am using innerHTML
This OP Display On a Console :  <div id="root">I am using innerHTML</div>
*/

root.innerHTML = "<h2>I am using innerHTML</h2>";
/*
This OP Display On a Browser : I am using innerHTML ( BOLD BECAUSE WE USE <h2> Tag )
This OP Display On a Console :  <div id="root"><h2>I am using innerHTML</h2></div>
*/

root.innerText = "I am using innerHTML";
/*
This OP Display On a Browser : I am using innerHTML
This OP Display On a Console :  <div id="root">I am using innerHTML</div>
*/

root.innerText = "<h2>I am using innerHTML</h2>";
/*
This OP Display On a Browser : <h2>I am using innerHTML</h2>
This OP Display On a Console :  <div id="root"><h2>I am using innerHTML</h2></div>
*/

root.textContent = "I am using innerHTML";
root.textContent = "<h2>I am using innerHTML</h2>";

console.log(root.tagName);