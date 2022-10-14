const diceBtn = document.getElementById("dice-btn");
const pcOutput = document.getElementById("pc-output");
const userOutput = document.getElementById("user-output");
const result = document.getElementById("result")

diceBtn.addEventListener("click", function(){
  const pcNumber = Math.ceil(Math.random()*6);
  const userNumber = Math.ceil(Math.random()*6);
  pcOutput.innerHTML = "Il computer ha tirato: " + pcNumber;
  userOutput.innerHTML = "Tu hai tirato: " + userNumber;

  if (userNumber > pcNumber) {
    result.innerHTML = "Bravo! Hai vinto!"
  } else if (userNumber === pcNumber) {
    result.innerHTML = "Pareggio, non ha vinto nessuno! Riprova"
  } else {
    result.innerHTML = "Ha perso! Ritenta, sarai più fortunato!"
  }
})