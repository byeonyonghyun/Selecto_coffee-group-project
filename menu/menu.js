// menu click event
const wrap = document.querySelector(".menu_detail > ul");
const menuBtns = document.querySelectorAll(".menu_select li");

const createItem = (items) => {
  console.log(items.id, menuBtns);
  const menuItem = document.createElement("li");
  const menuWrap = document.createElement("a");
  const span = document.createElement("span");
  const img = document.createElement("img");
  const menuTitle = document.createElement("h1");

  menuItem.className = "menu_item";

  menuWrap.className = "menu_img";

  span.className = "menu_new";
  span.innerText = items.type;

  img.src = items.img;

  menuTitle.className = "menu_text";
  menuTitle.innerText = items.title;

  menuWrap.append(span, img);
  menuItem.append(menuWrap, menuTitle);
  wrap.appendChild(menuItem);
  items.forEach((item) => {});
};

menuBtns.forEach((menuBtn) => {
  menuBtn.addEventListener("click", () => {
    fetch("items.json")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((items) => {
          createItem(items);
        });
      });
  });
});

// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const btnIndex = button.dataset.index;
//     const leftImgs = document.querySelectorAll(".left_img > img");
//     const centerImgs = document.querySelectorAll(".select_signature_img > img");
//     const rightTit = document.querySelectorAll(".menu_text > h1");
//     const rightText = document.querySelectorAll(".menu_text > p");
//     const rightMenu = document.querySelectorAll(".menu_img");
//     const topping = document.querySelectorAll(".topping_wrap");
//     for (let i = 0; i < leftImgs.length; i++) {
//       buttons[i].classList.remove("active");
//       leftImgs[i].classList.remove("active");
//       centerImgs[i].classList.remove("active");
//       rightTit[i].classList.remove("active");
//       rightText[i].classList.remove("active");
//       rightMenu[i].classList.remove("active");
//       topping[i].classList.remove("active");
//     }
//     button.classList.add("active");
//     leftImgs[btnIndex].classList.add("active");
//     centerImgs[btnIndex].classList.add("active");
//     rightTit[btnIndex].classList.add("active");
//     rightText[btnIndex].classList.add("active");
//     rightMenu[btnIndex].classList.add("active");
//     topping[btnIndex].classList.add("active");
//   });
// });
