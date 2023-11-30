
//// Es. 1  -------------------------------

const searchContainerElGen = () => {
    const searchContainer = document.createElement("div");
    const imageEl = document.createElement("img");
    const inputEl = document.createElement("input");
    
    searchContainer.className = "search";
    
    imageEl.src = "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png";
    imageEl.alt = "netflix-clone-logo";

    inputEl.type = "text";
    inputEl.placeholder = "Search";

    searchContainer.append(imageEl, inputEl);

    return searchContainer;
}

const linksContainerElGen = () => {
    const linksContainer = document.createElement("div");
    const linksList = document.createElement("ul");
    const linkItem01 = document.createElement("li");
    const linkItem02 = document.createElement("li");
    const linkSelLabel = document.createElement("label");
    const linkSelEl = document.createElement("select");
    const linkSelOpt01 = document.createElement("option");
    const linkSelOpt02 = document.createElement("option");

    linksContainer.className = "links";
    linksList.className = "links-list";

    linkSelLabel.setAttribute("for", "categories");
    linkSelEl.name = "categories";
    linkSelEl.id = "categories";
    linkSelOpt01.value = "Tv Shows";
    linkSelOpt02.value = "Movies";

    linkItem01.textContent = "TV Shows";
    linkItem02.textContent = "Movies";
    linkSelLabel.textContent = "Categories:";
    linkSelOpt01.textContent = "Tv Shows";
    linkSelOpt02.textContent = "Movies";

    linksContainer.append(linksList);
    linksList.append(linkItem01, linkItem02, linkSelLabel, linkSelEl);
    linkSelEl.append(linkSelOpt01, linkSelOpt02);

    return linksContainer; 
}

//// --------------------------------------

//// Creazione Modal ---------------------
const modalContainerElGen = () => {
  const modalWrapperEl = document.createElement("div");
  const modalTitleEl = document.createElement("h3");
  const modalTextEl = document.createElement("p");
  const modalBtnEl = document.createElement("button");
  
  modalWrapperEl.className = "modal-wrapper";

  modalTitleEl.textContent = "Title";
  modalTextEl.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, saepe!";
  modalBtnEl.textContent = "Watch Now";

  modalWrapperEl.append(modalTitleEl, modalTextEl, modalBtnEl);

  return modalWrapperEl;
}

//// --------------------------------------

const listsContainerElGen = (title) => {
    const container = document.createElement("div");
    const titleEl = document.createElement("h3");
  
    container.className = "lists-container";
    titleEl.textContent = title;
  
    container.append(titleEl);
    return container;
  };
  
  const cardsListElGen = () => {
    const container = document.createElement("div");
  
    container.className = "cards-list";
  
    return container;
  };
  
  const cardElGen = (imageData) => {
    const imageEl = document.createElement("img");
  
    imageEl.className = "card-item";
    imageEl.src = `https://image.tmdb.org/t/p/w500${imageData.poster_path}`;
    imageEl.alt = imageData.name;
  
    return imageEl;
  };
  
  export { searchContainerElGen, linksContainerElGen, cardElGen, cardsListElGen, listsContainerElGen, modalContainerElGen };
  
