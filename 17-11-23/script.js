const createEl = (el) => document.createElement(el);
const addClass = (el, className) => el.setAttribute("class", className);
const addText = (el, text) => (el.textContent = text);

// Ex. 1 + Ex. Avanzato
// Popup con bottoni e time-out
const popupGen = () => {
  const popupWrapper = createEl("div");
  const popupText = createEl("p");
  const btnWrapper = createEl("div");
  const yesBtn = createEl("button");
  const noBtn = createEl("button");

  addClass(popupWrapper, "popup-wrapper");
  addClass(popupText, "popup-text");
  addClass(yesBtn, "btn yes-btn");
  addClass(noBtn, "btn no-btn");

  addText(
    popupText,
    "Per continuare a navigare su questo sito devi essere maggiorenne. Confermi?"
  );
  addText(yesBtn, "Si");
  addText(noBtn, "No");

  popupWrapper.append(popupText, btnWrapper);
  btnWrapper.append(yesBtn, noBtn);

  return popupWrapper;
};

setTimeout(() => {
  const popup = popupGen();
  document.body.append(popup);

  const yesBtnEl = document.querySelector(".yes-btn");
  const noBtnEl = document.querySelector(".no-btn");

  const popupEl = document.querySelector(".popup-wrapper");
  const wrapperEl = document.querySelector(".hidden-content");
  const loaderEl = document.querySelector(".loader");

  yesBtnEl.addEventListener("click", () => {
    popupEl.remove();
    wrapperEl.removeAttribute("class", "hidden-content");
    // extra: ho inserito un loader nel file html,
    // visibile prima che appaia il popup
    // e che viene rimosso cliccando "si"
    addClass(loaderEl, "hidden-content");
  });

  noBtnEl.addEventListener("click", () => {
    window.location.replace("http://www.google.com");
  });
}, 3000);
// Nota: ho visto che esistono window.location.replace e window.location.href.
// Ho usato replace perchè mi sembrava più sensato per lo scopo del bottone
// La differenza è che replace rimuova la url corrente dalla cronologia del browser
// quindi non si può più tornare alla pagina precedente col tasto "indietro"

// Ex. 2
// Fetch
// Stampo in console solo i prodotti con prezzo inferiore a 50 $.
fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    data.products.forEach((product) => {
      if (product.price < 50) {
        console.log(product.title, "price:", product.price, "$");
      }
    });
  });
