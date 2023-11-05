// // Ex. 1 // //
// definisco una funzione
function getTemperatureStatus(actualTemp) {
  if (actualTemp <= 9) {
    return "fredda.";
  } else if (actualTemp >= 10 && actualTemp <= 25) {
    return "mite.";
  } else if (actualTemp >= 26) {
    return "calda.";
  } else {
    return "Temperatura non valida. Inserisci un valore numerico.";
  }
}
// inserisco un prompt che permette all'utente di inserire un valore
let actualTemp = prompt("Quanti gradi ci sono oggi?");
// invoco la funzione
console.log("Oggi la temperatura è " + getTemperatureStatus(actualTemp));

// // Ex. 2 // //
// Creo un Oggetto
const personInfo = {
  name: "Valentina",
  surname: "Scalone",
  birthDay: 27,
  birthMonth: "Febbraio",
  birthYear: 1988,

  getInfo: function () {
    return (
      "Ciao! Mi chiamo " +
      this.name +
      " " +
      this.surname +
      " e sono nata il " +
      this.birthDay +
      " " +
      this.birthMonth +
      " del " +
      this.birthYear +
      "."
    );
  },
};

console.log(personInfo.getInfo());
