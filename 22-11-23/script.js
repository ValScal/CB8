/* Esercizio 1 */
/* Commento per renderizzare direttamente l'esercizio avanzato */

// const stampImageList = async () => {
//     const res = await fetch('https://picsum.photos/v2/list');
//     const image = await res.json();

//     // Tramite map itera su ogni immagine e stampa l'URL
//     const imageMap = image.map(image => console.log(image.download_url));

//     // Restituisco il primo elemento dell'array
//     return imageMap;
// };


/* Esercizo 2 + Avanzato */
/* Commento per renderizzare direttamente l'esercizio avanzato */

// const imageObject = {
//   id: "0",
//   author: "Alejandro Escamilla",
//   download_url: "https://picsum.photos/id/0/5000/3333"
// }


// Recupero la lista delle immagini
const getImageList = async () => {
  const res = await fetch("https://picsum.photos/v2/list");
  const image = await res.json();

  return image;
}
// Restituisco un array di immagini

// Creo e definisco gli elementi da inserire nel DOM
const imageAndTextEl = (image) => {
  const imageContainerEl = document.createElement('div');
  const imageEl = document.createElement("img");
  const idTextEl = document.createElement("p");
  const authorTextEl = document.createElement("p");

  imageEl.src = image.download_url;
  authorTextEl.textContent = ("Photo n. " + image.id + " | Author: " + image.author); 
 
  imageContainerEl.className = "image-container";
  imageEl.className = "image-element";
  idTextEl.className = "id-text-element";
  authorTextEl.className = "author-text-element";

  imageContainerEl.append(imageEl, idTextEl, authorTextEl);

  return imageContainerEl;
}
 
// Eseguo il rendering delle immagini e del testo, e lo appendo al body 
const renderImagesAndText = async () => {
  const list = await getImageList();
  list.forEach((list) =>{
      const image = imageAndTextEl(list);
      document.body.append(image)
  })
}

renderImagesAndText();

