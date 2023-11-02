// start 
console.log("-- Primo metodo --");

// definisco un array
const animali = [
  "cavallo",
  "cane",
  "gatto",
  "criceto",
  "pipistrello",
  "gabbiano",
  "iguana",
  "elefante",
];

// definisco un ciclo for per stampare un indice degli elementi dell'array
// parto da i = 0
// a condizione che i sia minore del numero degli elementi dell'array
// e imposto un incremento unitario di i

for (let i = 0; i < animali.length; i++) {
  // stampo il risultato, che sarà un indice degli elementi incrementato di 1
  console.log(i + ": " + animali[i]);
}

////////////////////////////////////////////////////

console.log("-- Secondo metodo --");

// ma... ho notato che, nell'esempio dell'esercizio, l'elenco comincia da 1!
// quindi ho pensato a due metodi:
// aggiungere una unità ad ogni indice nel console.log
// così da stampare il primo elemento con indice 1 senza fare altre modifiche.

for (let i = 0; i < animali.length; i++) {
  console.log(i + 1 + ": " + animali[i]);
}

////////////////////////////////////////////////////

console.log("-- Terzo metodo --");

// oppure aggiungere un altro elemento in coda all'array con push
// partire da 1 = 1
// e stampare comunque 8 elementi a partire da quello con indice 1
// (un ragionamento un po' più contorto)

animali.push("unicorno");
for (let i = 1; i < animali.length; i++) {
  console.log(i + ": " + animali[i]);
}
