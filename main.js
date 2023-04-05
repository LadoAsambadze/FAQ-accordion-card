const buttons = document.querySelectorAll("button");

buttons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    const parent = button.parentElement;
    const grandparent = parent.parentElement;
    grandparent.lastElementChild.classList.toggle("hidden");
  });
});
