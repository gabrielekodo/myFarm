const btns = document.querySelectorAll(".btn");
const container = document.querySelector(".row");
const cards = document.querySelectorAll(".login-card");

container.addEventListener("click", (e) => {
  console.log(e.target.dataset.id);
  const id = e.target.dataset.id;

  if (id) {
    // remove class of active from all buttons
    btns.forEach((btn) => {
      btn.classList.remove("active-btn");

      // add active class to only clicked button
      e.target.classList.add("active-btn");
    });

    // hide other cards
    cards.forEach((card) => {
      card.classList.add("d-none");
    });

    // show only active card
    const element = document.getElementById(id);
    element.classList.remove("d-none");
  }
});
