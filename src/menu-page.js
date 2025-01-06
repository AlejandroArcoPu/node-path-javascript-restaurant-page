import bowl from "./images/bowl.png";

export const displayMenu = () => {
  const body = document.querySelector("body");
  const initialMain = document.createElement("main");
  initialMain.classList = "menu-page";
  body.appendChild(initialMain);

  const titleMenu = document.createElement("h2");
  titleMenu.textContent = "BUILD YOUR BOWL";
  initialMain.appendChild(titleMenu);

  const separatorSVG = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );

  separatorSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  separatorSVG.setAttribute("viewBox", "0 0 1280 100");
  separatorSVG.classList = "separator";
  separatorSVG.innerHTML =
    '<g transform="translate(280,0)" fill="none" stroke="black" stroke-width="10"><path d="M20 58c27-13.33333333 54-20 81-20 40.5 0 40.5 20 81 20s40.626917-20 81-20 40.123083 20 80.5 20 40.5-20 81-20 40.5 20 81 20 40.626917-20 81-20c26.915389 0 53.748722 6.66666667 80.5 20"></path><path opacity="0.3" transform="translate(0,20)" d="M20 58c27-13.33333333 54-20 81-20 40.5 0 40.5 20 81 20s40.626917-20 81-20 40.123083 20 80.5 20 40.5-20 81-20 40.5 20 81 20 40.626917-20 81-20c26.915389 0 53.748722 6.66666667 80.5 20"></path></g>';

  initialMain.appendChild(separatorSVG);

  const stepsDiv = document.createElement("div");
  stepsDiv.classList = "steps";
  initialMain.appendChild(stepsDiv);

  const sizeSection = document.createElement("section");
  sizeSection.classList = "section-steps";
  stepsDiv.appendChild(sizeSection);

  const sizeTitle = document.createElement("h4");
  sizeTitle.textContent = "CHOOSE SIZE";
  sizeTitle.classList = "steps-titles";

  const groupSizesDiv = document.createElement("div");
  groupSizesDiv.classList = "group-size";

  const smallDiv = document.createElement("div");
  smallDiv.classList = "sizes-in";
  const smallParagraph = document.createElement("p");
  smallParagraph.textContent = "Small";
  const smallImg = document.createElement("img");
  const smallPrice = document.createElement("p");
  smallImg.src = bowl;
  smallImg.classList = "small";
  smallPrice.textContent = "$7.00";
  smallDiv.appendChild(smallParagraph);
  smallDiv.appendChild(smallImg);
  smallDiv.appendChild(smallPrice);

  const regularDiv = document.createElement("div");
  regularDiv.classList = "sizes-in";
  const regularParagraph = document.createElement("p");
  regularParagraph.textContent = "Regular";
  const regularImg = document.createElement("img");
  const regularPrice = document.createElement("p");
  regularImg.src = bowl;
  regularImg.classList = "regular";
  regularPrice.textContent = "$9.90";
  regularDiv.appendChild(regularParagraph);
  regularDiv.appendChild(regularImg);
  regularDiv.appendChild(regularPrice);

  const largeDiv = document.createElement("div");
  largeDiv.classList = "sizes-in";
  const largeParagraph = document.createElement("p");
  largeParagraph.textContent = "Large";
  const largeImg = document.createElement("img");
  largeImg.src = bowl;
  largeImg.classList = "large";
  const largePrice = document.createElement("p");
  largePrice.textContent = "$12.95";
  largeDiv.appendChild(largeParagraph);
  largeDiv.appendChild(largeImg);
  largeDiv.appendChild(largePrice);

  groupSizesDiv.appendChild(smallDiv);
  groupSizesDiv.appendChild(regularDiv);
  groupSizesDiv.appendChild(largeDiv);

  sizeSection.appendChild(sizeTitle);
  sizeSection.appendChild(groupSizesDiv);

  const section1 = document.createElement("section");
  section1.classList = "section-steps";
  const step1Title = document.createElement("h4");
  step1Title.textContent = "STEP-1 (Base)";
  step1Title.classList = "steps-titles";

  const step1TypesDiv = document.createElement("div");
  const step1Rice1 = document.createElement("p");
  step1Rice1.innerHTML = "White <strong>Rice</strong> 🍚";
  const step1Rice2 = document.createElement("p");
  step1Rice2.innerHTML = "Brown <strong>Rice</strong> 🍚";
  const step1Greens = document.createElement("p");
  step1Greens.innerHTML = "Mixed <strong>Greens</strong> 🥦";
  section1.appendChild(step1Title);
  step1TypesDiv.appendChild(step1Rice1);
  step1TypesDiv.appendChild(step1Rice2);
  step1TypesDiv.appendChild(step1Greens);
  section1.appendChild(step1TypesDiv);
  stepsDiv.appendChild(section1);

  const section2 = document.createElement("section");
  section2.classList = "section-steps";
  const step2Title = document.createElement("h4");
  step2Title.textContent = "STEP-2 (Protein)";
  step2Title.classList = "steps-titles";

  const step2TypesDiv = document.createElement("div");
  step2TypesDiv.classList = "group-size";
  const step2Salmon = document.createElement("p");
  step2Salmon.textContent = "Salmon 🍣";
  const step2Tuna = document.createElement("p");
  step2Tuna.textContent = "Tuna 🐟";
  const step2Tofu = document.createElement("p");
  step2Tofu.textContent = "Tofu 🧈";
  const step2Chicken = document.createElement("p");
  step2Chicken.textContent = "Chicken 🐔";
  step2TypesDiv.appendChild(step2Salmon);
  step2TypesDiv.appendChild(step2Tuna);
  step2TypesDiv.appendChild(step2Tofu);
  step2TypesDiv.appendChild(step2Chicken);
  section2.appendChild(step2Title);
  section2.appendChild(step2TypesDiv);
  stepsDiv.appendChild(section2);

  const section3 = document.createElement("section");
  section3.classList = "section-steps";
  const step3Title = document.createElement("h4");
  step3Title.textContent = "STEP-3 (Mix)";
  step3Title.classList = "steps-titles";

  const step3TypesDiv = document.createElement("div");
  const step3Onion = document.createElement("p");
  step3Onion.textContent = "Onion 🧅";
  const step3Cucumber = document.createElement("p");
  step3Cucumber.textContent = "Cucumber 🥒";
  const step3Avocado = document.createElement("p");
  step3Avocado.textContent = "Avocado 🥑";
  const step3Cilantro = document.createElement("p");
  step3Cilantro.textContent = "Cilantro 🌿";
  step3TypesDiv.appendChild(step3Onion);
  step3TypesDiv.appendChild(step3Cucumber);
  step3TypesDiv.appendChild(step3Avocado);
  step3TypesDiv.appendChild(step3Cilantro);
  section3.appendChild(step3Title);
  section3.appendChild(step3TypesDiv);
  stepsDiv.appendChild(section3);

  const section4 = document.createElement("section");
  section4.classList = "section-steps";
  const step4Title = document.createElement("h4");
  step4Title.textContent = "STEP-4 (Sauce)";
  step4Title.classList = "steps-titles";

  const step4TypesDiv = document.createElement("div");
  step4TypesDiv.classList = "group-size";
  const step4AliOli = document.createElement("p");
  step4AliOli.textContent = "Spicy AliOli";
  const step4Samuray = document.createElement("p");
  step4Samuray.textContent = "Samuray";
  const step4Volcano = document.createElement("p");
  step4Volcano.textContent = "Volcano";
  const step4Wasabi = document.createElement("p");
  step4Wasabi.textContent = "Wasabi";
  step4TypesDiv.appendChild(step4AliOli);
  step4TypesDiv.appendChild(step4Samuray);
  step4TypesDiv.appendChild(step4Volcano);
  step4TypesDiv.appendChild(step4Wasabi);
  section4.appendChild(step4Title);
  section4.appendChild(step4TypesDiv);
  stepsDiv.appendChild(section4);

  const section5 = document.createElement("section");
  section5.classList = "section-steps";
  const step5Title = document.createElement("h4");
  step5Title.textContent = "STEP-5 (Toppings)";
  step5Title.classList = "steps-titles";

  const step5TypesDiv = document.createElement("div");
  const step5Sesame = document.createElement("p");
  step5Sesame.textContent = "Sesame seeds";
  const step5Green = document.createElement("p");
  step5Green.textContent = "Green Onion";
  const step5Ginger = document.createElement("p");
  step5Ginger.textContent = "Ginger";

  step5TypesDiv.appendChild(step5Sesame);
  step5TypesDiv.appendChild(step5Green);
  step5TypesDiv.appendChild(step5Ginger);
  section5.appendChild(step5Title);
  section5.appendChild(step5TypesDiv);
  stepsDiv.appendChild(section5);
};
