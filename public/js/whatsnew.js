const as = document.querySelectorAll("a");

as.forEach((a, i)=> {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    as.forEach((a)=> a.classList.remove("active"))
    a.classList.add("active");
  })
})
