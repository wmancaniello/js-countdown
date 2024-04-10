let countdownDecrease;

//  CREO UNA FUNCTION da associare successivamente al pulsante dello start del countdown
function startCountdown() {
  // variabile fissa dei 10 secondi di partenza
  let startCountdown = 11;

  // Riduco il conteggio
  countdownDecrease = setInterval(function () {
    startCountdown--;
    // Stampo in console il countdown
    console.log(startCountdown);
    // Stampo in HTML
    document.getElementById(
      "number"
    ).innerHTML = `Mancano ${startCountdown} secondi a Capodanno!`;

    // Se il countdown arriva a 0, stampare Buon Anno!
    if (startCountdown === 0) {
      // Fermo il countdown
      clearInterval(countdownDecrease);
      // Stampo in console Buon Anno!
      console.log("Buon Anno!");
      // Stampo in HTML
      document.getElementById("number").innerText = "Buon anno!";
    }
  }, 1000);
}

//  Pulsante di reset
function resetCountdown() {
  clearInterval(countdownDecrease);
  document.getElementById("number").innerText = "Premi Avvia!";
}

// Button Start e Reset, a cui aggiungo event listener
document.getElementById("start").addEventListener("click", startCountdown);
document.getElementById("reset").addEventListener("click", resetCountdown);
