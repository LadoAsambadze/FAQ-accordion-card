const buttons = document.querySelectorAll(".buttons");

buttons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    const parent = event.target.closest(".grid-item");
    const paragraph = parent.querySelector("p");
    paragraph.classList.toggle("hidden");
  });
});
