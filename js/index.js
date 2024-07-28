//list of sliders image
const headerImage = document.querySelector(".header");
const headerColorBox = document.querySelector(".color-blank");
const headerColorName = document.querySelector(".color-name");
const nextBtn = document.querySelector(".right-btn");
const preBtn = document.querySelector(".left-btn");
let indexHeaderImage = 1;

//third page change background
let indexThirdPageChange = 1;
const thirdPageBackground = document.querySelector(".third-page");
const sliderCircle = document.querySelectorAll(".circle");

// scroll btn
let topBtn = document.querySelector(".f-button");
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
