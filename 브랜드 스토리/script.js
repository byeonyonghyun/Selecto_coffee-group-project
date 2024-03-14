window.addEventListener("scroll", (e) => {
  console.log(e)
    const fadeIns = document.querySelectorAll('.fade-in');
    for (let i = 0; i < fadeIns.length; i++) {
      const fadeIn = fadeIns[i];
      const imgMove = fadeIn.getBoundingClientRect().bottom;
      if (imgMove <= window.innerHeight) {
        fadeIn.classList.add('active');
      }
    }
  });