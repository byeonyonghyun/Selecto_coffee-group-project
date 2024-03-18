const footerPopUp = document.querySelector(".footer_pop_up");
const privacyPopUpButton = document.querySelector(".privacy_pop_up_button");
const popUpWrapPrivacyUseInfoHidden = document.querySelector(
  ".pop_up_wrap_privacyUseInfo_hidden"
);
const footerPopupCloseBtn = document.querySelector(".footer_popup_close_btn");

const totopBtn = document.querySelector(".totop_btn");

privacyPopUpButton.onclick = () => {
  popUpWrapPrivacyUseInfoHidden.classList.add("flex");
  footerPopUp.classList.add("block");
};
footerPopupCloseBtn.onclick = () => {
  popUpWrapPrivacyUseInfoHidden.classList.remove("flex");
  footerPopUp.classList.remove("block");
};

//페이지 위로 스크롤되는 버튼
totopBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
