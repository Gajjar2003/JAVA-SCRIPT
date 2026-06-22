import { subject,userLogged } from "./User.js";


userLogged()

console.log("script loaded");

function printsuject(){
   let str = ""
    subject.forEach((index) =>{
        str += `<li>${index}</li>`
    })

    document.getElementById('sublist').innerHTML=str;

}

window.onload = printsuject
