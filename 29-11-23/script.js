import { httpGET } from "./modules/http.js";
import {
  searchContainerElGen,
  linksContainerElGen,
  cardElGen,
  cardsListElGen,
  listsContainerElGen,
  modalContainerElGen,
} from "./modules/components.js";

const asyncListContainerElGen = async (endpoint, title) => {
  const data = await httpGET(endpoint);
  const listContainerEl = listsContainerElGen(title);
  const cardsListEl = cardsListElGen();

  data.results.map((serie) => cardsListEl.append(cardElGen(serie)));
  listContainerEl.append(cardsListEl);

  return listContainerEl;
};

//// Es. 1  -------------------------------

const navbarEl = document.querySelector(".navbar");
navbarEl.append(searchContainerElGen(), linksContainerElGen());

//// Es. 2 più o meno  -------------------------------

const modalEl = document.querySelector(".modal");
modalEl.append(modalContainerElGen());

//// --------------------------------------

const mainSectionEl = document.querySelector(".main");

Promise.all([
  asyncListContainerElGen("/movie/upcoming", "Movies - Upcoming"),
  asyncListContainerElGen("/movie/now_playing", "Movies - Now Playing"),
  asyncListContainerElGen("/tv/top_rated", "Serie Tv - Top Rated"),
  asyncListContainerElGen("/tv/popular", "Serie Tv - Popular"),
]).then((elements) => elements.map((el) => mainSectionEl.append(el)));