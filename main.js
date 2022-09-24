const input = document.querySelector(".input");
const counter = document.querySelector(".counter");
const btnReset = document.querySelector(".btnReset");

function calculateInput() {
  counter.textContent = input.value.length;
}

function resetCounter() {
  input.value = "";
  counter.textContent = 0;
}
input.addEventListener("keyup", calculateInput);
btnReset.addEventListener("click", resetCounter);
