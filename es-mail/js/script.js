const mailList = [
  "alessia.franchi@gmail.com",
  "rossi@libero.it",
  "ilaria.verdi@tiscali.com",
  "matteo.riccetti@yahoo.it",
  "gianni.calenda@gmail.com"
];

const btnInput = document.getElementById("insert-btn");
let output = document.getElementById("result");

btnInput.addEventListener("click", function() {
  output.innerHTML = "";
  const userMail = prompt("Inserisci qui il tuo indirizzo mail");
  let isUserMail = false;

  for (let i = 0; i < mailList.length; i++) {
    if (mailList[i] === userMail) {
      isUserMail = true;
    }
  }
    if (isUserMail) {
    output.innerHTML = "Sei già iscritto alla newsletter";
  }  else {
    output.innerHTML = "Non sei ancora iscritto alla newsletter, puoi procedere all'iscrizione";
  }

})