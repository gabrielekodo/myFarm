import { gab ,showError} from "./utils.js";

const btns = document.querySelectorAll(".btn");
const container = document.querySelector("body");
const cards = document.querySelectorAll(".login");

let email = document.getElementById("inputEmail3");
let password = document.getElementById("inputPassword3");
let name = document.getElementById("username").value;
let userEmail = document.getElementById("user-email").value;
let userPassword = document.getElementById("user-password");
let confirmPassword = document.getElementById("confirm-password");
let phone = document.getElementById("userphone").value;
let roleSelect = document.getElementById("role");

const update = () => {
  var select = document.getElementById("role");
  var option = select.options[select.selectedIndex];
  //    console.log( { value: option.value, text: option.text });
  return { value: option.value, text: option.text };
};

const role = document
  .querySelector("select")
  .addEventListener("change", update);

container.addEventListener("click", (e) => {
  // e.preventDefault()

  const id = e.target.dataset.id;
console.log(id)

  if (id) {
    // add active class to only clicked button
    // });
    document.getElementById(id).classList.toggle("d-none");
    e.target.classList.toggle("d-none");

    // hide other cards
    cards.forEach((card) => {
      card.classList.add("d-none");
    });

    // show only active card
    const activeCard = document.getElementById(id);
    activeCard.classList.remove("d-none");
  }
});
 const login = (e) => {
   e.preventDefault();
     console.log(email.value, password.value);

   if (email.value === "" || password.value === "") {
     console.log(document.getElementById("login-wrapper"));
    // document.getElementById('login-wrapper').classList.add('position-relative')
     showError("danger", "wrong email or password! Try again");
     setTimeout(() => {
       document.querySelector(".error").classList.add("d-none");
     }, 3000);
   }
  // else {
  //    showError("success", "Logged in successfully");
  //    setTimeout(() => {
  //      document.querySelector(".error").classList.add("d-none");
  //    }, 3000);
  //    location.href = "manager-dashboard.html";
  //  }
 };


//sign up form validation
const register = (e) => {
  e.preventDefault();
  let role = update().text;

  // alert(role);
  if (userPassword.value === "" || userPassword.value.length < 8) {
    alert("password can not be empty or is not long enough");
  }

  if (userPassword.value !== confirmPassword.value) {
    alert("passwords must match");
  }
  // else {
  //   location.href = "sales-dashboard.html";
  // }
};

document.getElementById("login").addEventListener("submit", login);
document.getElementById("register").addEventListener("submit", register);
