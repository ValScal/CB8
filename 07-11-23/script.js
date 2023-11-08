console.log("--- Ex. 1 ---");

/* 
Sulla base della lezione di Lunedi, ricreare la funzione calcolatrice utilizzando le callbacks. Fate in modo che possa calcolare le quattro operazioni base matematiche ( + - * /) e che prenda non due ma tre valori numerici sui quali eseguire queste operazioni. In questo caso, potete aiutarvi con il codice della lezione.
*/

// Definisco le funzioni che esguiranno le 4 operazioni
const sum = (firstNum, secondNum, thirdNum) => firstNum + secondNum + thirdNum;
const sub = (firstNum, secondNum, thirdNum) => firstNum - secondNum - thirdNum;
const mult = (firstNum, secondNum, thirdNum) => firstNum * secondNum * thirdNum;
const div = (firstNum, secondNum, thirdNum) => firstNum / secondNum / thirdNum;

// Definisco la funzione calcolatrice con il callback "operation" e gli dico di stamparmi il risultato delle varie operazioni
// Appunto:
// function calculator(fn) {
//   return fn;
// } ---> arrow fn "spacchettata"

console.log("I valori sono 7, 3, 4. Svolgiamo le operazioni:");

const calculator = (operation) => operation;
{
  console.log("Risultato della somma: " + sum(7, 3, 4));
  console.log("Risultato della somma: " + sub(7, 3, 4));
  console.log("Risultato della somm: " + mult(7, 3, 4));
  console.log("Risultato della somma: " + div(7, 3, 4));
}

///////////////////////////////////////////////////////////////////

console.log("--- Ex. 2 ---");

/*
Creare un array di oggetti che simuli la lista del carrello di un e-commerce. Ogni oggetto deve avere al suo interno almeno un id, un nome, una indirizzo per immagine, e una descrizione. Processate il seguente array di oggetti con map e forEach, e scriverne in commento la differenza. Basta solo stamparne il contenuto.
*/

const cart = [
  {
    id: 1,
    urlImg: "https://placehold.co/400x400",
    name: "Materasso in lattice naturale",
    option: "180x200cm",
    description: "Materasso in lattice 100% naturale certificato FSC",
    price: "1400€",
  },
  {
    id: 2,
    urlImg: "https://placehold.co/400x400",
    name: "Futon giapponese in cotone",
    option: "90x200cm",
    description:
      "Futon formato da 3 strati di cotone naturale, altezza 8 cm, rivestimento in cotone 100%",
    price: "220€",
  },
  {
    id: 3,
    urlImg: "https://placehold.co/400x400",
    name: "Tatami tradizionali",
    option: "90x200x5cm",
    description:
      "Tatami tradizionali composti all'interno in paglia di riso pressata e rivestimento di giunco intrecciato",
    price: "170€",
  },
  {
    id: 4,
    urlImg: "https://placehold.co/400x400",
    name: "Lenzuola matrimoniali",
    option: "180x200cm",
    description: "Lenzuola matrimoniali in cotone 100% bio certificato GOTS",
    price: "128€",
  },
];

console.log("Eseguiamo il forEach:");

// Utilizzo forEach:
cart.forEach((product) => {
  console.log(
    product.id +
      ": " +
      product.urlImg +
      product.name +
      ", misure: " +
      product.option +
      "; " +
      "Descrizione: " +
      product.description +
      "; " +
      " Prezzo: " +
      product.price
  );
});

console.log("Eseguiamo il map:");

cart.map((product) => {
  console.log(
    product.id +
      ": " +
      product.urlImg +
      product.name +
      ", misure: " +
      product.option +
      "; " +
      "Descrizione: " +
      product.description +
      "; " +
      " Prezzo: " +
      product.price
  );
});
// sia foreach che map, tramite funzione, iterano gli elementi di un array; foreach non resistuisce alcun valore, mentre map restituisce un array.

///////////////////////////////////
// Avanzato - Trasformazione e Filtraggio di un Elenco di Numeri

// trasformazione:
// console.log("array1:");
// // dato il seguente array:
const array1 = [3, 6, 9, 12];
// // eseguiamo un map e con una variabile M moltiplichiamo ogni valore per 2:
// const mapArray1 = array1.map((M) => M * 2);
// console.log(mapArray1);

// console.log("---------");

// console.log("array2:");

// // dato il seguente array:
const array2 = [5, 10, 15, 20];
// // eseguiamo un map e con una variabile S aggiungiamo 5 a ogni valore:
// const mapArray2 = array2.map((S) => S + 5);
// console.log(mapArray2);

// trasformazione e filtraggio tramite funzione unica

console.log("---transformed And Filtered------");

const transformAndFilter = (array1, array2) => {
  const transformedArray1 = array1.map((num) => num * 2);
  const transformedArray2 = array2.map((num) => num + 5);
  const filteredArray1 = transformedArray1.filter((num) => num > 10);
  const filteredArray2 = transformedArray2.filter((num) => num % 2 === 0);

  return { filteredArray1, filteredArray2 };
};

console.log(transformAndFilter(array1, array2));
