const footerPopUp = document.querySelector(".footer_pop_up");
const privacyPopUpButton = document.querySelector(".privacy_pop_up_button");
const popUpWrapPrivacyUseInfoHidden = document.querySelector(
  ".pop_up_wrap_privacyUseInfo_hidden"
);
const footerPopupCloseBtn = document.querySelector(".footer_popup_close_btn");

//***********totop */
const toTopBtn = document.querySelector(".totop_btn");

privacyPopUpButton.addEventListener("click", (e) => {
  e.preventDefault();
  popUpWrapPrivacyUseInfoHidden.classList.add("flex");
  footerPopUp.classList.add("block");
});

footerPopupCloseBtn.addEventListener("click", () => {
  popUpWrapPrivacyUseInfoHidden.classList.remove("flex");
  footerPopUp.classList.remove("block");
});

//페이지 위로 스크롤되는 버튼
// totop

toTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
