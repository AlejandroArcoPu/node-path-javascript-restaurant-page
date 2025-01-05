import camping from "./images/camping.png";
export const displayAbout = () => {
  const body = document.querySelector("body");
  const initialMain = document.createElement("main");
  initialMain.classList = "about-page";
  body.appendChild(initialMain);

  const sectionWelcome = document.createElement("section");
  sectionWelcome.classList = "welcome";
  const welcomeTitle = document.createElement("h2");
  welcomeTitle.textContent = "WELCOME TO BEAST POKE BOWL!";
  const welcomeSubtitle = document.createElement("p");
  welcomeSubtitle.textContent =
    "We're a Passionate Blend of Fresh Ingredients, Vibrant Flavors, and the Rich Heritage of Hawaiian Poke Bowls, Bringing a Taste of Paradise to Every Bite!";
  const campImg = document.createElement("img");
  campImg.src = camping;

  const sectionContact = document.createElement("section");
  sectionContact.classList = "contact";
  const titleContact = document.createElement("h2");
  titleContact.textContent = "Contact us!";
  const subtitleContact = document.createElement("p");
  subtitleContact.textContent = "+34 123 456 789";
  sectionContact.appendChild(titleContact);
  sectionContact.appendChild(subtitleContact);

  const sectionWhere = document.createElement("section");
  sectionWhere.classList = "where";
  const titleWhere = document.createElement("h2");
  sectionWhere.appendChild(titleWhere);
  titleWhere.textContent = "Location";
  const mapFrame = document.createElement("iframe");
  mapFrame.src =
    "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d22476.31892241763!2d-68.68467153441874!3d45.236874824999084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1736106504646!5m2!1ses!2ses";
  mapFrame.classList = "location";
  mapFrame.style = "border: 2px solid black";
  mapFrame.loading = "lazy";
  sectionWhere.appendChild(mapFrame);

  sectionWelcome.appendChild(welcomeTitle);
  sectionWelcome.appendChild(welcomeSubtitle);
  initialMain.appendChild(sectionWelcome);
  initialMain.appendChild(sectionContact);
  initialMain.appendChild(sectionWhere);
  initialMain.appendChild(campImg);
};
