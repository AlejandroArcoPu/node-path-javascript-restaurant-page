import pokebowl from "./images/poke-test.png";

export const displayHomePage = () => {
  const body = document.querySelector("body");
  const initialMain = document.createElement("main");
  initialMain.classList = "home-page";
  body.appendChild(initialMain);

  const titleHome = document.createElement("h1");
  const hawaiiHome = document.createElement("span");
  titleHome.textContent = "TASTE THE ESSENCE OF ";
  hawaiiHome.classList = "hawaii-title";
  hawaiiHome.textContent = "HAWAII 🌴";
  titleHome.appendChild(hawaiiHome);
  initialMain.appendChild(titleHome);

  const subtitleHome = document.createElement("p");
  subtitleHome.innerHTML =
    "Did you know? <strong>Poke bowls originated in Hawaii</strong> as a simple fisherman’s snack, combining <strong>raw fish 🐟</strong> with <strong>seaweed 🌿</strong> and <strong>sea salt 🧂</strong>.";
  initialMain.append(subtitleHome);

  const buttonOrder = document.createElement("button");
  buttonOrder.textContent = "Order now";
  buttonOrder.classList = "button-order";
  initialMain.appendChild(buttonOrder);

  const pokeBowl = document.createElement("div");
  pokeBowl.classList = "pokebowl";
  const imgPoke = document.createElement("img");
  imgPoke.src = pokebowl;
  pokeBowl.appendChild(imgPoke);
  initialMain.appendChild(pokeBowl);
};
