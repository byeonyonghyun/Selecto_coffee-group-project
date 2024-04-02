const as = document.querySelectorAll(".whats_new");

as.forEach((a, i)=> {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    as.forEach((a)=> a.classList.remove("active"))
    a.classList.add("active");
  })
})
