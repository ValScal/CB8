// Nota: ho creato il layout tenendo in considerazione 
// un utilizzo da mobile, come se fosse una App. 
// Per una migliore visualizzazione imposta l'inspector di Chrome su "mobile", grazie!

// Sviluppo:
// Scrivo la funzione che crea tutti gli elementi da inserire nel DOM
// e subito sotto assegno gli attributi agli elementi

const sectionHeaderGen = (headerData) => {
  const sectionHeaderEl = document.createElement("section");
  const navEl = document.createElement("nav");
  const navTitleEl = document.createElement("div");
  const headingOneEl = document.createElement("h1");
  const navIconsEl = document.createElement("div");
  const btnSearchEl = document.createElement("button");
  const iconSearch = document.createElement("i");
  const btnCartEl = document.createElement("button");
  const iconCart = document.createElement("i");

  sectionHeaderEl.className = "header";
  navEl.className = "main-nav";
  navTitleEl.className = "nav-title";
  navIconsEl.className = "nav-icons";
  btnSearchEl.className = "search";
  iconSearch.className = "fa-solid fa-magnifying-glass";
  btnCartEl.className = "search";
  iconCart.className = "fa-solid fa-magnifying-glass";

  headingOneEl.textContent = "Find Best Furnitures";

  sectionHeaderEl.append(navEl);
  navEl.append(navTitleEl, navIconsEl);
  navTitleEl.append(headingOneEl);
  navIconsEl.append(btnSearchEl, btnCartEl);
  btnSearchEl.append(iconSearch);
  btnCartEl.append(iconCart);

  return sectionHeaderEl;
};

const categoriesGen = (categoriesData) => {
  const sectionCatEl = document.createElement("section");
  const btnCatEl = document.createElement("button");
  const iconSearchEl = document.createElement("i");
  const catSpanEl = document.createElement("span");

  sectionCatEl.className = "categories";
  btnCatEl.className = "categories-buttons";
  iconSearchEl.className = "fa-solid fa-magnifying-glass";

  catSpanEl.textContent = "All";

  sectionCatEl.append(btnCatEl);
  btnCatEl.append(iconSearchEl, catSpanEl);

  return sectionCatEl;
};

const roboProdGen = (roboData) => {
  const sectionRecomEl = document.createElement("section");
  const headingThreeEl = document.createElement("h3");
  const recomListElInner = document.createElement("div");
  const recomEl = document.createElement("div");
  const recomImgEl = document.createElement("img");
  const recomTextEl = document.createElement("div");
  const recomPriceEl = document.createElement("p");
  const recomNameEl = document.createElement("h4");
  const wishlistEl = document.createElement("button");
  const addEl = document.createElement("button");
  const iconWishEl = document.createElement("i");
  const iconAddEl = document.createElement("i");

  sectionRecomEl.className = "recommended";
  recomListElInner.className = "robo-list";
  recomEl.className = "robo";
  wishlistEl.className = "wishlist";
  addEl.className = "add";
  iconWishEl.className = "fa-regular fa-heart";
  iconAddEl.className = "fa-solid fa-plus";

  recomImgEl.src = roboData.imageUrl;
  recomImgEl.alt = roboData.roboName;
  recomPriceEl.textContent = roboData.price + "$";
  recomNameEl.textContent = roboData.roboName;

  sectionRecomEl.append(recomListElInner);
  recomListElInner.append(recomEl);
  recomEl.append(recomImgEl, recomTextEl);
  recomTextEl.append(recomPriceEl, recomNameEl, wishlistEl, addEl);
  wishlistEl.append(iconWishEl);
  addEl.append(iconAddEl);

  return sectionRecomEl;
};

const mockData = [
  {
    id: 1,
    roboName: "Valentina",
    price: 199.99,
    imageUrl: "https://robohash.org/Valentina?set=set4",
  },
  {
    id: 2,
    roboName: "Casi",
    price: 299.99,
    imageUrl: "https://robohash.org/Casi?set=set4",
  },
  {
    id: 3,
    roboName: "Kitty",
    price: 99.99,
    imageUrl: "https://robohash.org/Kitty?set=set4",
  },
  {
    id: 4,
    roboName: "Fufi",
    price: 89.99,
    imageUrl: "https://robohash.org/Fufi?set=set4",
  },
];

// QUESTO NON FUNZIONA!
// const recomListEl = document.querySelector(".robo-list");
// document.body.append(sectionHeaderGen(), categoriesGen(), recomListEl);
// mockData.map((robo) => recomListEl.append(roboProdGen(robo)));

// NOTA: ho aggiunto l'evento DOMContentLoaded perchè dalla console ricevevo un errore
// secondo cui stavo cercando di selezionare l'elemento con la classe ".robo-list" 
// prima che la pagina HTML fosse completamente caricata.
// Non sapendo come risolvere, ho trovato questo evento nella documentazione
// e l'ho provato. 
document.addEventListener("DOMContentLoaded", function () {
  const recomListEl = document.createElement("div");
  recomListEl.className = "robo-list";

  const headerListEl = document.createElement("div");
  headerListEl.className = "header";

  const categoriesListEl = document.createElement("div");
  categoriesListEl.className = "categories";

  document.body.append(headerListEl, categoriesListEl, recomListEl);

  mockData.forEach((robo) => recomListEl.append(roboProdGen(robo)));
});
// Quindi, ragionando, ho creato recomListEl uche genera un div con classe .robo-list,
// ho aggiunto recomListEl al corpo del documento all'evento DOMContentLoaded che dice
// che .robo-list deve essere ricercato dopo la costruzione del DOM.
// Avrei dovuto correggere la riga 137 




// Try & Catch
try {
  const roboProdGen = document.querySelector(".recommended");

  if (!roboProdGen) {
    throw new Error("Elemento con classe 'recommended' non trovato nel documento.");
  }

  roboProdGen.textContent = "Operazione completata con successo!";
} catch (error) {
  console.error("Si è verificato un errore:", error);
}