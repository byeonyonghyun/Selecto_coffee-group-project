const firstYear = document.querySelector(".history_year_scroll_2023");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 200) {
    firstYear.classList.add("sticky");
  }
});
