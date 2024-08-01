//NAVBAR
const width = window.innerWidth;
const leftNavbarItems = document.querySelector(".nav-left-option");
const rightNavbarItems = document.querySelector(".nav-right-option");
const hamburgerBtn = document.querySelector(".hamburger_btn");
const hamburgerMenu = document.querySelector(".hamburger_menu");
const hamburgerMenuItems = document.querySelector(".ham_ul");
const navbarLinks = document.querySelectorAll(".nav-link");
let hamburgerMenuFlag = false;

//list of sliders image
const headerImage = document.querySelector(".header");
const headerColorBox = document.querySelector(".color-blank");
const headerColorName = document.querySelector(".color-name");
const nextBtn = document.querySelector(".right-btn");
const preBtn = document.querySelector(".left-btn");
let indexHeaderImage = 1;

//product items
const productCard = document.querySelector(".product-items");

//third page change background
let indexThirdPageChange = 1;
const thirdPageBackground = document.querySelector(".third-page");
const sliderCircle = document.querySelectorAll(".circle");

// scroll btn
let topBtn = document.querySelector(".f-button");

if (width < 1465) {
  productCard.style.display = "none";
  // resProductCard.style.display = "flex";
}

//hamburger menu

hamburgerBtn.addEventListener("click", () => {
  if (!hamburgerMenuFlag) {
    hamburgerBtn.src = "./assets/navbar/multiply1.png";
    hamburgerMenuFlag = true;
    hamburgerMenu.style.padding = "25px";
    hamburgerMenu.style.width = "150px";
    hamburgerMenuItems.style.display = "flex";
  } else {
    hamburgerBtn.src = "./assets/navbar/menu.png";
    hamburgerMenuFlag = false;
    hamburgerMenu.style.width = "0%";
    hamburgerMenu.style.padding = "0px";
    hamburgerMenuItems.style.display = "none";
  }
  console.log("object");
});

//next header image btn
const headerSliderImageNext = () => {
  const sliderImage = [
    {
      imageUrl: "slider01",
      typeWood: "typesld01",
      name: "brown",
    },
    {
      imageUrl: "slider02",
      typeWood: "typesld02",
      name: "blue",
    },
    {
      imageUrl: "slider03",
      typeWood: "typesld03",
      name: "light",
    },
  ];

  if (sliderImage.length === indexHeaderImage) {
    indexHeaderImage = 0;
  }
  if (indexHeaderImage === -1) {
    indexHeaderImage = 0;
  }

  headerImage.style.backgroundImage = `url(./../assets/sliders/${sliderImage[indexHeaderImage].imageUrl}.jpg)`;
  headerColorBox.src = `./assets/typewood/${sliderImage[indexHeaderImage].typeWood}.png`;
  headerColorName.innerHTML = sliderImage[indexHeaderImage].name;
  nextBtn.classList.add("active");
  preBtn.classList.remove("active");
  indexHeaderImage++;
};
nextBtn.addEventListener("click", headerSliderImageNext);

//prev header image btn
const headerSliderImagePrev = () => {
  const sliderImage = [
    {
      imageUrl: "slider01",
      typeWood: "typesld01",
      name: "brown",
    },
    {
      imageUrl: "slider02",
      typeWood: "typesld02",
      name: "blue",
    },
    {
      imageUrl: "slider03",
      typeWood: "typesld03",
      name: "light",
    },
  ];
  if (sliderImage.length === indexHeaderImage) {
    indexHeaderImage = 0;
  }
  if (indexHeaderImage === -1) {
    indexHeaderImage = sliderImage.length - 1;
  }
  headerImage.style.backgroundImage = `url(./../assets/sliders/${sliderImage[indexHeaderImage].imageUrl}.jpg)`;
  headerColorBox.src = `./assets/typewood/${sliderImage[indexHeaderImage].typeWood}.png`;
  headerColorName.innerHTML = sliderImage[indexHeaderImage].name;
  preBtn.classList.add("active");
  nextBtn.classList.remove("active");
  indexHeaderImage--;
};
preBtn.addEventListener("click", headerSliderImagePrev);

const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 6,
  // If we need pagination

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//third page background change

const thirdPageBackGroundChange = () => {
  console.log("object");
};
setInterval(() => {
  const thirdPageBackArr = ["ch01", "ch02", "ch03", "ch04", "ch05", "ch06"];
  if (indexThirdPageChange === thirdPageBackArr.length) {
    indexThirdPageChange = 0;
  }

  thirdPageBackground.style.backgroundImage = `url(./../assets/changed//${thirdPageBackArr[indexThirdPageChange]}.jpg)`;

  const divToSlider = document.createElement("div");
  sliderCircle[indexThirdPageChange].append(divToSlider);

  sliderCircle.forEach((items) => {
    //remove active class
    items.classList.remove("active");
  });

  sliderCircle.forEach((items) => {
    items.addEventListener("click", () => {
      indexThirdPageChange = items.id - 1; //select image of product
    });
  });
  sliderCircle[indexThirdPageChange].classList.add("active");

  indexThirdPageChange++;
}, 2000);

// scroll function
function topFunction() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

topBtn.addEventListener("click", topFunction);
