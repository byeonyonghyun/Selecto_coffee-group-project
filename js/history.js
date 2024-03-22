const firstYear = document.querySelector(".history_year_unfixed_2023")
const fixedfirstYear = document.querySelector(".history_year_scroll_2023")  
const lastYear =document.querySelector(".history_year_unfixed_2012")

window.addEventListener("scroll", ()=> {
    const scrollNum = window.scrollY;
    console.log(scrollY)
    firstYear.style.transform = `translateY(${scrollNum / 2}px)`;
    if (scrollNum >= 300) {
        firstYear.classList.add("opacity0") ,
        fixedfirstYear.classList.add("opacity1")
    } if ( scrollNum <= 300) {
        firstYear.classList.remove("opacity0") ,
        fixedfirstYear.classList.remove("opacity1")
    } if ( scrollNum >= 660) {
        fixedfirstYear.innerHTML = "2022";
    } if ( scrollNum >= 1100) {
        fixedfirstYear.innerHTML = "2021";
    } if ( scrollNum >= 1600) {
        fixedfirstYear.innerHTML = "2020";
    } if ( scrollNum >= 2200) {
        fixedfirstYear.innerHTML = "2019";
    } if ( scrollNum >= 3540) {
        fixedfirstYear.innerHTML = "2018";
    } if ( scrollNum >= 4140) {
        fixedfirstYear.innerHTML = "2017";
    } if ( scrollNum >= 4640) {
        fixedfirstYear.innerHTML = "2016";
    } if ( scrollNum >= 5850) {
        fixedfirstYear.innerHTML = "2015";
    } if ( scrollNum >= 7090) {
        fixedfirstYear.innerHTML = "2014";
    } if ( scrollNum >= 7670) {
        fixedfirstYear.innerHTML = "2013";
    } if ( scrollNum >= 8018) {
        fixedfirstYear.innerHTML = "2012";
    } if ( scrollNum >= 9900) {
        fixedfirstYear.classList.remove("opacity1")
        lastYear.classList.add("opacity1")
    } if ( scrollNum <= 9900) {
        lastYear.classList.remove("opacity1")
    }
})


