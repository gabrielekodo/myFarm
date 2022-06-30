import { gab,showError } from "./utils.js";

let email = document.getElementById("inputEmail3");
let password = document.getElementById("inputPassword3");

 const login = (e) => {
   e.preventDefault();
   //   console.log(email.value, password.value);

   if (email.value === "" || password.value === "") {
     showError("danger", "wrong email or password! Try again");
     setTimeout(() => {
       document.querySelector(".error").classList.add("d-none");
     }, 3000);
   } else {
     showError("success", "Logged in successfully");
     setTimeout(() => {
       document.querySelector(".error").classList.add("d-none");
     }, 3000);
     location.href = "manager-dashboard.html";
   }
 };


document.getElementById("login").addEventListener("submit", login);