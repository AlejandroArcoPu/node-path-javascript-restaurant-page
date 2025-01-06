import "./styles.css";
import { displayHomePage } from "./home-page";
import { displayMenu } from "./menu-page";
import { displayAbout } from "./about-page";

function ScreenController() {
  const homeButton = document.querySelector(".home-button");
  const menuButton = document.querySelector(".menu-button");
  const aboutButton = document.querySelector(".about-button");

  const removeCurrentMain = () => {
    if (document.querySelector("main")) {
      const main = document.querySelector("main");
      main.remove();
    }
  };

  const markButtonAsSelected = (event) => {
    const buttonSelected = document.querySelector(".button-selected");
    buttonSelected.classList = "";
    event.target.classList = "button-selected";
  };

  const homeButtonSelected = () => {
    const homeButton = document.querySelector(".home-button");
    homeButton.classList = "button-selected";
  };

  homeButton.addEventListener("click", (event) => {
    removeCurrentMain();
    markButtonAsSelected(event);
    displayHomePage();
  });

  menuButton.addEventListener("click", (event) => {
    removeCurrentMain();
    markButtonAsSelected(event);
    displayMenu();
  });

  aboutButton.addEventListener("click", (event) => {
    removeCurrentMain();
    markButtonAsSelected(event);
    displayAbout();
  });

  homeButtonSelected();
  displayHomePage();
}

ScreenController();
