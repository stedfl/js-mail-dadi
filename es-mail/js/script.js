const mailList = [
  "alessia.franchi@gmail.com",
  "rossi@libero.it",
  "ilaria.verdi@tiscali.com",
  "matteo.riccetti@yahoo.it",
  "gianni.calenda@gmail.com"
];

const btnInput = document.getElementById("insert-btn");

btnInput.addEventListener("click", function() {
  let output = document.getElementById("result");
  const userMail = prompt("Inserisci qui il tuo indirizzo mail");
  let isUserMail = false;
  
  if (userMail.toLowerCase()
  .match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )) {
    
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

  } else {
    alert("Indirizzo e-mail non valido")
  }
})