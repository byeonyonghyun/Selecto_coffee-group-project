// menu click event
const wrap = document.querySelector(".menu_detail > ul");
const menuBtns = document.querySelectorAll(".menu_select li");

const removeItems = () => {
  const liAll = document.querySelectorAll(".menu_detail li");
  liAll.forEach((li) => {
    li.remove();
  });
};

const createItem = (items, index) => {
  if (items.index == index) {
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

    // 상세페이지 이동
    img.addEventListener("click", () => {
      const url = `https://www.selecto.co.kr/brand/menu_detail.asp?menuidx=${items.menuidx}&page=${items.page}&slideInx=${items.slideInx}&kind=${items.category}`;
      window.open(url);
    });

    if (items.type === null) {
      span.style.opacity = 0;
    }
  }
};

menuBtns.forEach((menuBtn) => {
  menuBtn.addEventListener("click", () => {
    menuBtns.forEach((menuBtn) => menuBtn.classList.remove("active"));
    menuBtn.classList.add("active");

    removeItems();

    // json
    fetch("items.json")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((items) => {
          createItem(items, menuBtn.dataset.index);
        });
      });
  });
});

// 시그니처 아이템 생성
document.addEventListener("DOMContentLoaded", () => {
  fetch("items.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((items) => {
        createItem(items, 0);
      });
    });
});
