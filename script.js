// popup close
const popClose01 = document.querySelector(".popclose01");
const popClose02 = document.querySelector(".popclose02");
const popup01 = document.querySelector(".pop01");
const popup02 = document.querySelector(".pop02");

popClose01.addEventListener("click", () => {
  popClose01.parentNode.remove();
});
popClose02.addEventListener("click", () => {
  popClose02.parentNode.remove();
});

// m-popup close
const body = document.querySelector("body");
const popupBtn = document.querySelector(".m_popup_close");
const mPopup = document.querySelectorAll(".mobile_popup");

body.classList.add("modal-open");

popupBtn.addEventListener("click", () => {
  popupBtn.parentNode.parentNode.parentNode.remove();
  body.classList.remove("modal-open");
});

// popup link
const popLink01 = document.querySelector(".pop_link01");
const popLink02 = document.querySelector(".pop_link02");

popLink01.addEventListener("click", () => {
  window.open("https://www.youtube.com/watch?v=r6bibJ3wZQI");
});
popLink02.addEventListener("click", () => {
  window.open("https://www.youtube.com/watch?v=gGHKuVlTO3M");
});

// image slide
const sliderWrapper = document.querySelector(".scroll_img");
const sliderContainer = document.querySelector(".slide_pc");
const sliderContainerMo = document.querySelector(".slide_mo");
const slides = document.querySelectorAll(".slide_pc > img");
const slidesMo = document.querySelectorAll(".slide_mo > img");
console.log(slides);

const navPrev = document.querySelector("#left");
const navNext = document.querySelector("#right");

const slideCount = slides.length;
// slide count
for (let i = 0; i < slideCount; i++) {
  slides[i].style.left = `${i * 100}%`;
  slidesMo[i].style.left = `${i * 100}%`;
}

const makeClone = () => {
  for (let i = 0; i < slideCount; i++) {
    slides[i].style.left = `${i * 100}%`;
    const cloneSlide = slides[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    sliderContainer.appendChild(cloneSlide);
  }
  for (let i = slideCount - 1; i >= 0; i--) {
    slides[i].style.left = `${i * 100}%`;
    const cloneSlide = slides[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    sliderContainer.prepend(cloneSlide);
  }
};

makeClone();

// slide width

let currentIndex = 0;

const gotoSlide = (i) => {
  sliderContainer.style.left = `${i * -100}%`;
  sliderContainerMo.style.left = `${i * -100}%`;
  sliderContainer.classList.add("animated");
  sliderContainerMo.classList.add("animated");
  currentIndex = i;
};

gotoSlide(0);

// auto slide function

const startAutoSlide = () => {
  timer = setInterval(() => {
    const nextIdx = (currentIndex + 1) % slideCount;
    gotoSlide(nextIdx);
  }, 3000);
};

startAutoSlide();

sliderWrapper.addEventListener("mouseenter", () => {
  clearInterval(timer);
});

sliderWrapper.addEventListener("mouseleave", () => {
  startAutoSlide();
});

// selecto menu click event
const buttons = document.querySelectorAll(".buttons > button");
console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const btnIndex = button.dataset.index;
    const leftImgs = document.querySelectorAll(".left_img > img");
    const centerImgs = document.querySelectorAll(".select_signature_img > img");
    const rightTit = document.querySelectorAll(".menu_text > h1");
    const rightText = document.querySelectorAll(".menu_text > p");
    const rightMenu = document.querySelectorAll(".menu_img");
    const topping = document.querySelectorAll(".topping_wrap");
    for (let i = 0; i < leftImgs.length; i++) {
      buttons[i].classList.remove("active");
      leftImgs[i].classList.remove("active");
      centerImgs[i].classList.remove("active");
      rightTit[i].classList.remove("active");
      rightText[i].classList.remove("active");
      rightMenu[i].classList.remove("active");
      topping[i].classList.remove("active");
    }
    button.classList.add("active");
    leftImgs[btnIndex].classList.add("active");
    centerImgs[btnIndex].classList.add("active");
    rightTit[btnIndex].classList.add("active");
    rightText[btnIndex].classList.add("active");
    rightMenu[btnIndex].classList.add("active");
    topping[btnIndex].classList.add("active");
  });
});

// sns link
const snsLink01 = document.querySelector(".sns_link01");
const snsLink02 = document.querySelector(".sns_link02");
const snsLink03 = document.querySelector(".sns_link03");
console.log(snsLink01);

snsLink01.addEventListener("click", () => {
  window.open("https://www.instagram.com/p/C4IFmbERfkt/");
});
snsLink02.addEventListener("click", () => {
  window.open("https://www.instagram.com/p/C362kX6RN41/");
});
snsLink03.addEventListener("click", () => {
  window.open("https://www.instagram.com/p/C3mogD6xyqc/");
});
