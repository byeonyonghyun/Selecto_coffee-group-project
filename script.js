// m-popup close
const popupBtn = document.querySelector(".m_popup_close");
const mPopup = document.querySelectorAll(".mobile_popup");
console.log(mPopup);

popupBtn.addEventListener("click", () => {
  popupBtn.parentNode.parentNode.remove();
});
