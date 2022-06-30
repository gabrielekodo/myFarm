

export const gab = () => {
  alert("hello gabby");
};

//regular expressions
let emailVal = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let passwordval = /^[0-9a-zA-Z]+$/;
let nameValidate = /^[a-zA-Z].*[\s\.]*$/;

//error box
export const showError = (state,msg) => {
  const error = `<div class=" error">
    <p class="lead text-${state} ">${msg}</p>
  </div>`;

  document.querySelector(".login").classList.add("position-relative");
  document.querySelector(".login").insertAdjacentHTML("afterbegin", error);
};



