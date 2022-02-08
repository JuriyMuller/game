const min = document.querySelector(".min-num"),
  max = document.querySelector(".max-num"),
  guessInput = document.querySelector("#guess-input"),
  guessBtn = document.querySelector("#guess-btn"),
  message = document.querySelector(".message"),
  winningNumber = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

min.innerText = 1;
max.innerText = 10;
let attempt = 3;

guessBtn.addEventListener("click", function () {
  const pars = parseInt(guessInput.value);

  if (
    isNaN(pars) ||
    pars > parseInt(max.innerHTML) ||
    pars < parseInt(min.innerHTML)
  ) {
    sayTxt(`Введено неправильное число ${pars}`, "red");
  } else if (pars != winningNumber) {
    attempt--;
    sayTxt(`Вы не угадали число. Осталось попыток: ${attempt}`, "red");
  }
  if (attempt === 0) {
    sayTxt(`Вы не угадали загаданное число: ${winningNumber}!`, "red");
    btnTxt(`Новая игра`, "red");
    guessInput.disabled = true;
    guessInput.style.border = "1px solid red";
    guessInput.value = "";
    guessBtn.addEventListener("click", () => window.location.reload());
  }

  if (winningNumber === pars) {
    sayTxt(`Вы угадали загаданное число: ${pars}!`, "green");
    btnTxt(`Новая игра`, "green");
    guessInput.disabled = true;
    guessInput.style.border = "1px solid green";
    guessInput.value = "";
    guessBtn.addEventListener("click", () => window.location.reload());
  }
  function btnTxt(txt, color) {
    guessBtn.innerText = txt;
    guessInput.style.border = color;
    guessBtn.style.color = color;
  }

  function sayTxt(txt, color) {
    message.textContent = txt;
    message.style.color = color;
  }
});
