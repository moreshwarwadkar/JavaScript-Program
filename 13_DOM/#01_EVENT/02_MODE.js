/* DARK AND LIGHT MODE */

let mode = "dark";
let btn = document.getElementById("btn");

btn.addEventListener("click",
    ()=>{
        if(mode=="dark"){
            mode = "light";

            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
            btn.innerText = "Light Mode";
        }
        else{
            mode = "dark";

            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
            btn.innerText = "Dark Mode";
        }
    }
);