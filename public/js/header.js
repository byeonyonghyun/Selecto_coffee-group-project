// ******** header
const header = document.querySelector(".header")
const menuList = document.querySelector(".menu");
const headerHidden = document.querySelector(".header_hidden");
// ******** mobile_box
const menuBurgers = document.querySelector(".menu_burgers");
const mobileBox = document.querySelector(".mobile_box");
const mobileCloseBtn = document.querySelector(".mobile_closeBtn");
const mobileMenuTitles = document.querySelectorAll(".mobile_menu_title");

// cursor move
const cursor = document.querySelector("#cursor");

// cursor pageX, Y
let x = 0;
let y = 0;

// cursor original & speed
let targetX = 0;
let targetY = 0;
let speed = 0.1;

window.addEventListener("mousemove", (e) => {
  x = e.pageX;
  y = e.pageY;
});

const loop = () => {
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;
  cursor.style.top = targetY + "px";
  cursor.style.left = targetX + "px";
  window.requestAnimationFrame(loop);
};
loop();

const showCursorRotate = () => {
  cursor.classList.add("active");
};
const hideCursorRotate = () => {
  cursor.classList.remove("active");
};



// ******** header
menuList.addEventListener("mouseenter", () => {
  headerHidden.classList.add("focus");
});
headerHidden.addEventListener("mouseleave", () => {
  headerHidden.classList.remove("focus");
});
// ******** mobile_box
menuBurgers.addEventListener("click", () => {
  mobileBox.classList.add("right");
  document.querySelector("#wrap").style.filter = "blur(10px)";
});
mobileCloseBtn.addEventListener("click", () => {
  mobileBox.classList.remove("right");
  document.querySelector("#wrap").style.filter = "none";
});

mobileMenuTitles.forEach((mobileMenuTitle) => {
  mobileMenuTitle.addEventListener("click", function () {
    const mobileMenuList =
      this.parentElement.querySelector(".mobile_menu_list");
    mobileMenuList.classList.toggle("down");
  });
});

//***********header-hide */
let lastScrollTop = 0; // 마지막 스크롤 위치를 저장할 변수

window.addEventListener("scroll", function () {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // 아래로 스크롤
    header.style.top = "-100px"; // 헤더 숨기기
  } else {
    // 위로 스크롤
    header.style.top = "0"; // 헤더 보이기
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // 음수가 되지 않도록 설정
}, false);

