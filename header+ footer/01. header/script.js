// ******** header
const menuList = document.querySelector(".menu");
const headerHidden = document.querySelector(".header_hidden");
// ******** mobile_box
const menuBurgers = document.querySelector(".menu_burgers");
const mobileBox = document.querySelector(".mobile_box");
const mobileCloseBtn = document.querySelector(".mobile_closeBtn");
const menuArrows = document.querySelectorAll(".menu_arrow");
const mobileMenuList = document.querySelectorAll(".mobile_menu_list");
const mobileMenus = document.querySelectorAll(".mobile_menu");

// ******** header
menuList.onmouseover = () => {
  headerHidden.classList.add("focus");
};

menuList.onmouseleave = () => {
  headerHidden.classList.remove("focus");
};
// ******** mobile_box
menuBurgers.onclick = () => {
  mobileBox.classList.add("right");
};
mobileCloseBtn.onclick = () => {
  mobileBox.classList.remove("right");
};

mobileMenus.forEach((mobileMenu) => {
  mobileMenu.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("active");
  });
});
