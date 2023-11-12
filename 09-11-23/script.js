// EX. 1

// Hero Generator
const heroGenerator = (heroSection) => {
  // creo gli elementi html
  const heroWrapperEl = document.createElement("div");
  const heroTextDivEl = document.createElement("div");
  const heroTitleEl = document.createElement("h1");
  const heroParEl = document.createElement("p");
  const heroBtnEl = document.createElement("button");
  const heroBtnIconEl = document.createElement("img");
  const heroImgDivEl = document.createElement("div");
  const heroImgEl = document.createElement("img");
  // imposto gli attributi e il contenuto degli elementi creati
  heroWrapperEl.setAttribute("class", "heroWrapper");
  heroTextDivEl.setAttribute("class", "heroText");
  heroTitleEl.textContent = "Enjoying space like never before";
  heroParEl.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.";
  heroBtnEl.setAttribute("class", "heroButton");
  heroBtnIconEl.setAttribute("class", "arrowIcon");
  heroBtnIconEl.setAttribute("src", "/images/circle-arrow-right-solid.png");
  heroBtnIconEl.setAttribute("alt", "Click for Magic");
  heroImgDivEl.setAttribute("class", "heroImg");
  heroImgEl.setAttribute("src", "/images/planet.png");
  heroImgEl.setAttribute("alt", "Planet");
  // inserisco gli elementi nel codice html, annidati
  heroWrapperEl.append(heroTextDivEl, heroImgDivEl);
  heroTextDivEl.append(heroTitleEl, heroParEl, heroBtnEl);
  heroBtnEl.append("Click for Magic", heroBtnIconEl);
  heroImgDivEl.append(heroImgEl);
  // mi faccio restituire il div che contiene tutti gli elementi creati e annidati
  return heroWrapperEl;
};

// seleziono l'elemento html .hero dentro cui appendo tutto l'html generato da js.
document.getElementsByClassName("hero")[0].append(heroGenerator("heroSection"));

// EX. 2

//
const heroBtnEl = document.querySelector(".heroButton");
const heroWrapperEl = document.querySelector(".heroWrapper");
const btnResetEl = document.querySelector(".buttonReset");

heroBtnEl.addEventListener("click", function () {
  heroWrapperEl.setAttribute("class", "displayNone");
});

btnResetEl.addEventListener("click", function () {
  heroWrapperEl.setAttribute("class", "displayFlex");
});

// EX. 3
//
const gallery = document.querySelector(".galleryRow");

// creo delle funzioni aventi come argomento un oggetto
const galleryItem01 = {
  id: 1,
  imgUrl: "https://picsum.photos/400/300?1",
  altText: "Picture 1",
};

const galleryItem02 = {
  id: 2,
  imgUrl: "https://picsum.photos/400/300?2",
  altText: "Picture 2",
};

const galleryItem03 = {
  id: 3,
  imgUrl: "https://picsum.photos/400/300?3",
  altText: "Picture 3",
};

const galleryItem04 = {
  id: 4,
  imgUrl: "https://picsum.photos/400/300?4",
  altText: "Picture 4",
};

// creo l'elemento immagine a cui associo gli attributi specificati prima
const imageGenerator = (img) => {
  const image = document.createElement("img");
  image.setAttribute("id", img.id);
  image.setAttribute("src", img.imgUrl);
  image.setAttribute("alt", img.altText);

  return image;
};

// creo tanti elementi per quante sono le immagini della gallery
// ognuno di questi mi creerà un div con classe .galleryCol
// il cui figlio sarà l'immagine specificata
const galleryCol01 = document.createElement("div");
galleryCol01.setAttribute("class", "galleryCol");
galleryCol01.appendChild(imageGenerator(galleryItem01));

const galleryCol02 = document.createElement("div");
galleryCol02.setAttribute("class", "galleryCol");
galleryCol02.appendChild(imageGenerator(galleryItem02));

const galleryCol03 = document.createElement("div");
galleryCol03.setAttribute("class", "galleryCol");
galleryCol03.appendChild(imageGenerator(galleryItem03));

const galleryCol04 = document.createElement("div");
galleryCol04.setAttribute("class", "galleryCol");
galleryCol04.appendChild(imageGenerator(galleryItem04));

// li inserisco nel codice html
gallery.append(galleryCol01, galleryCol02, galleryCol03, galleryCol04);

//
// EX. 4

// creo un array
const galleryImages = [
  {
    id: 10,
    imgUrl: "https://picsum.photos/400/300?5",
    altText: "Picture 10",
  },
  {
    id: 11,
    imgUrl: "https://picsum.photos/400/300?6",
    altText: "Picture 11",
  },
  {
    id: 12,
    imgUrl: "https://picsum.photos/400/300?7",
    altText: "Picture 12",
  },
  {
    id: 13,
    imgUrl: "https://picsum.photos/400/300?8",
    altText: "Picture 13",
  },
];

// per ogni elemento dell'arrey galleryImages creo un div galleryItem
// a cui assegno la classe .galleryCol
// e lo inserisco nel codice html con all'interno
// ogni immagine indicata nell'array

galleryImages.forEach((el) => {
  const galleryItem = document.createElement("div");
  galleryItem.setAttribute("class", "galleryCol");
  galleryItem.appendChild(imageGenerator(el));
  gallery.appendChild(galleryItem);
});
