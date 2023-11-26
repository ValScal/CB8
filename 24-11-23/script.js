const navSection = () => {
  const topNavEl = document.createElement("section");
  const logoEl = document.createElement("div");
  const logoImg = document.createElement("img");
  const menuToggleEl = document.createElement("input");
  const menuLabelEl = document.createElement("label");
  const menuBtnEl = document.createElement("div");
  const menuEl = document.createElement("ul");
  const menuLi1 = document.createElement("li");
  const menuAnchor1 = document.createElement("a");
  const menuLi2 = document.createElement("li");
  const menuAnchor2 = document.createElement("a");
  const menuLi3 = document.createElement("li");
  const menuAnchor3 = document.createElement("a");
  const menuLi4 = document.createElement("li");
  const menuAnchor4 = document.createElement("a");
  const menuLi5 = document.createElement("li");
  const menuAnchor5 = document.createElement("a");
  const menuLi6 = document.createElement("li");
  const menuAnchor6 = document.createElement("a");

  logoImg.src = "./images/logo-love.png";
  menuToggleEl.setAttribute("id", "menu-toggle");
  menuToggleEl.setAttribute("type", "checkbox");
  menuAnchor1.setAttribute("href", "/");
  menuAnchor1.setAttribute("title", "Home");
  menuAnchor2.setAttribute("href", "/");
  menuAnchor2.setAttribute("title", "About");
  menuAnchor3.setAttribute("href", "/");
  menuAnchor3.setAttribute("title", "Shop");
  menuAnchor4.setAttribute("href", "/");
  menuAnchor4.setAttribute("title", "Contact");
  menuAnchor5.setAttribute("href", "/");
  menuAnchor5.setAttribute("title", "Signup");
  menuAnchor6.setAttribute("href", "/");
  menuAnchor6.setAttribute("title", "Order Now");

  topNavEl.classList = ("container", "top-nav");
  logoEl.className = "logo";
  menuLabelEl.className = "menu-button-container";
  menuBtnEl.className = "menu-button";
  menuEl.className = "menu";

  menuAnchor1.textContent = "Home";
  menuAnchor2.textContent = "About";
  menuAnchor3.textContent = "Shop";
  menuAnchor4.textContent = "Contact";
  menuAnchor5.textContent = "Signup";
  menuAnchor6.textContent = "Order now";

  topNavEl.append(logoEl, menuToggleEl, menuLabelEl, menuEl);
  logoEl.append(logoImg);
  menuLabelEl.append(menuBtnEl);
  menuEl.append(menuLi1, menuLi2, menuLi3, menuLi4, menuLi5, menuLi6);
  menuLi1.append(menuAnchor1);
  menuLi2.append(menuAnchor2);
  menuLi3.append(menuAnchor3);
  menuLi4.append(menuAnchor4);
  menuLi5.append(menuAnchor5);
  menuLi6.append(menuAnchor6);

  return topNavEl;
};

const heroSection = () => {
  const heroWrapper = document.createElement("section");
  const heroText = document.createElement("div");
  const h1El = document.createElement("h1");
  const pEl = document.createElement("p");
  const buttonEl = document.createElement("button");
  const heroImg = document.createElement("div");
  const image = document.createElement("img");

  image.src = "./images/hero-img.png";
  buttonEl.setAttribute("title", "Get started");
  image.setAttribute("alt", "Hero image");

  heroWrapper.classList = ("container", "hero-wrapper");
  heroText.className = "hero-text";
  pEl.className = "hero-description";
  buttonEl.className = "button";
  heroImg.className = "hero-img";

  h1El.textContent = "Lorem ipsum dolor sit";
  pEl.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus amet corrupti saepe aliquam!";
  buttonEl.textContent = "GET STARTED";

  heroWrapper.append(heroText, heroImg);
  heroText.append(h1El, pEl, buttonEl);
  heroImg.append(image);

  return heroWrapper;
};

document.body.append(navSection(), heroSection());
