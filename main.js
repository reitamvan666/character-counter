const input = document.querySelector(".input");
const counter = document.querySelector(".counter");
const btnReset = document.querySelector(".btnReset");

//this will change the 0 on counter textcontent into input value length
function calculateInput() {
  counter.textContent = input.value.length;
}


// this will reset the input value into nothing and counter back to 0
function resetCounter() {
  input.value = "";
  counter.textContent = 0;
}

//adding an event listner
input.addEventListener("keyup", calculateInput);
btnReset.addEventListener("click", resetCounter);
