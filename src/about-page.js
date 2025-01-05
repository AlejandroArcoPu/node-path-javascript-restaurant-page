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
    "We're a Celebration of Fresh Ingredients, Bold Flavors, and Hawaiian Tradition!";
  sectionWelcome.appendChild(welcomeTitle);
  sectionWelcome.appendChild(welcomeSubtitle);
  initialMain.appendChild(sectionWelcome);
};
