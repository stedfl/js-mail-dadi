const diceBtn = document.getElementById("dice-btn");
const pcOutput = document.getElementById("pc-output");
const userOutput = document.getElementById("user-output");
const sad = document.getElementById("sad");
const smile = document.getElementById("smile");
const result = document.getElementById("result");

diceBtn.addEventListener("click", function(){
  const pcNumber = Math.ceil(Math.random() * 6);
  const userNumber = Math.ceil(Math.random() * 6);
  pcOutput.innerHTML = "Il computer ha tirato: " + pcNumber;
  userOutput.innerHTML = "Tu hai tirato: " + userNumber;
  smile.className = ("hide");
  sad.className = ("hide");
  strenght.className = ("hide");

  if (userNumber > pcNumber) {
    result.innerHTML = "Bravo! Hai vinto!"
    smile.className = ("visible");
  } else if (userNumber === pcNumber) {
    result.innerHTML = "Pareggio, non ha vinto nessuno! Riprova!"
    strenght.className = ("visible");
  } else {
    result.innerHTML = "Hai perso! Ritenta, sarai più fortunato!"
    sad.className = ("visible");
  }
})