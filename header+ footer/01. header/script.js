// ******** header
const menuList = document.querySelector(".menu");
const headerHidden = document.querySelector(".header_hidden");
// ******** mobile_box
const menuBurgers = document.querySelector(".menu_burgers");
const mobileBox = document.querySelector(".mobile_box");
const mobileCloseBtn = document.querySelector(".mobile_closeBtn");
const mobileMenuTitles = document.querySelectorAll(".mobile_menu_title");

// ******** header
menuList.onmouseover = () => {
  headerHidden.classList.add("focus");
};

headerHidden.onmouseleave = () => {
  headerHidden.classList.remove("focus");
};
// ******** mobile_box
menuBurgers.onclick = () => {
  mobileBox.classList.add("right");
};
mobileCloseBtn.onclick = () => {
  mobileBox.classList.remove("right");
};

mobileMenuTitles.forEach((mobileMenuTitle) => {
  mobileMenuTitle.addEventListener("click", function () {
    const mobileMenuList =
      this.parentElement.querySelector(".mobile_menu_list");
    mobileMenuList.classList.toggle("active");
  });
});
