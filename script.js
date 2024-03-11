// m-popup close
const popupBtn = document.querySelector(".m_popup_close");
const mPopup = document.querySelectorAll(".mobile_popup");
console.log(mPopup);

popupBtn.addEventListener("click", () => {
  popupBtn.parentNode.parentNode.remove();
});

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
const imgs = [
  "main-desk-1.jpg",
  "main-desk-2.jpg",
  "main-desk-3.jpg",
  "main-desk-4.jpg",
];

const imgContainer = document.querySelector(".scroll_img");
const arrows = document.querySelectorAll(".arrows");
const img = document.createElement("img");
const src = document.createAttribute("src");

img.className = "main_img_pc";
src.value = `./img/s_img/${imgs[0]}`;

img.setAttributeNode(src);
imgContainer.appendChild(img);

let i = 0;

const imgSlide = (direction) => {
  if (direction === "prev") {
    i--;
    if (i < 0) {
      i = imgs.length - 1;
    }
  } else if (direction === "next") {
    i++;
    if (i >= imgs.length) {
      i = 0;
    }
  }

  src.value = `./img/s_img/${imgs[i]}`;
};

arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    const direction = e.target.id === "left" ? "prev" : "next";
    imgSlide(direction);
  });
});

const autoSlide = () => {
  setInterval(() => {
    imgSlide("next");
  }, 5000);
};

autoSlide();

// selecto menu click event
// const leftImgs = document.querySelectorAll(".left_img > img");
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
