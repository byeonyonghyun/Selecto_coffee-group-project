<script>
        $(document).ready(function () {
          //$("#mobile__menu").load("../include/mobilemenu.asp");
          //$("#header").load("../include/header.asp");
          //$("#privacyPopUp").load("../include/privacy-pop_up.asp");
          //$("#footer").load("../include/footer.asp");
        });

        let historyHeadOffsetTop = document.querySelector(".history-head").offsetTop;
        let fixedYear = document.querySelector(".fixframe");
        let unfixed2022 = document.querySelector(".history-work-unfixed-2022");
        let unfixed2012 = document.querySelector(".history-work-unfixed-2012");
        let monthOffsetTop = document.querySelector(".month-for-offsetY").offsetTop;
        let offsetParent = document.querySelector(".month-for-offsetParent").offsetTop;
        let textChange = document.querySelector(".year-front");
        let borderBottomParent = document.querySelectorAll(".hw-foroffset");
        let borderBottom = document.querySelectorAll(".bottom-border");

        //페이지 900px이하 감지 함수
        function isSmallScreen() {
          if (window.matchMedia("(max-width: 900px)").matches) {
            return true;
          } else {
            return false;
          }
        }

        //반응형을 위한 fixed disapear 위치 리사이징 리턴 함수
        addEventListener("resize", function () {
          return (historyHeadOffsetTop = document.querySelector(".history-head").offsetTop);
        });
        addEventListener("resize", function () {
          return (monthOffsetTop = document.querySelector(".month-for-offsetY").offsetTop);
        });
        addEventListener("resize", function () {
          return (offsetParent = document.querySelector(".month-for-offsetParent").offsetTop);
        });
        addEventListener("resize", function () {
          return (borderBottomParent = document.querySelectorAll(".hw-foroffset"));
        });
        addEventListener("resize", function () {
          return (borderBottom = document.querySelectorAll(".bottom-border"));
        });

        //반응형을 위한 fixed풀림 위치 함수
        if (isSmallScreen() === true) {
          
          addEventListener("scroll", function () {
            fixedYear.classList.remove("fixed");
          });
        } else {
          // 리사이즈시 연도 바로 변환
          
          window.addEventListener("resize", function () {
            if (isSmallScreen() === true) {
              
              addEventListener("scroll", function () {
                fixedYear.classList.remove("fixed");
                unfixed2022.style.opacity = "1";
                unfixed2012.style.opacity = "1";
              });
            } else {
              
              addEventListener("scroll", function () {
                let value = this.scrollY;
                let relativeTop = fixedYear.getBoundingClientRect().top;
                let scrolledTopLength = window.pageYOffset;
                let absoluteTop = scrolledTopLength + relativeTop;

                if (value > historyHeadOffsetTop - 60 && value <= offsetParent + monthOffsetTop) {
                  fixedYear.classList.add("fixed");
                  unfixed2022.style.opacity = "0";
                  unfixed2012.style.opacity = "0";

                  if (absoluteTop < borderBottomParent[0].offsetTop + borderBottom[0].offsetTop) {
                    textChange.innerHTML = "2023";
                  } else if (absoluteTop >= borderBottomParent[0].offsetTop + borderBottom[0].offsetTop && absoluteTop < borderBottomParent[1].offsetTop + borderBottom[1].offsetTop) {
                    textChange.innerHTML = "2022";
                  } else if (absoluteTop >= borderBottomParent[1].offsetTop + borderBottom[1].offsetTop && absoluteTop < borderBottomParent[2].offsetTop + borderBottom[2].offsetTop) {
                    textChange.innerHTML = "2021";
                  } else if (absoluteTop >= borderBottomParent[2].offsetTop + borderBottom[2].offsetTop && absoluteTop < borderBottomParent[3].offsetTop + borderBottom[3].offsetTop) {
                    textChange.innerHTML = "2020";
                  } else if (absoluteTop >= borderBottomParent[3].offsetTop + borderBottom[3].offsetTop && absoluteTop < borderBottomParent[4].offsetTop + borderBottom[4].offsetTop) {
                    textChange.innerHTML = "2019";
                  } else if (absoluteTop >= borderBottomParent[4].offsetTop + borderBottom[4].offsetTop && absoluteTop < borderBottomParent[5].offsetTop + borderBottom[5].offsetTop) {
                    textChange.innerHTML = "2018";
                  } else if (absoluteTop >= borderBottomParent[5].offsetTop + borderBottom[5].offsetTop && absoluteTop < borderBottomParent[6].offsetTop + borderBottom[6].offsetTop) {
                    textChange.innerHTML = "2017";
                  } else if (absoluteTop >= borderBottomParent[6].offsetTop + borderBottom[6].offsetTop && absoluteTop < borderBottomParent[7].offsetTop + borderBottom[7].offsetTop) {
                    textChange.innerHTML = "2016";
                  } else if (absoluteTop >= borderBottomParent[7].offsetTop + borderBottom[7].offsetTop && absoluteTop < borderBottomParent[8].offsetTop + borderBottom[8].offsetTop) {
                    textChange.innerHTML = "2015";
                  } else if (absoluteTop >= borderBottomParent[8].offsetTop + borderBottom[8].offsetTop && absoluteTop < borderBottomParent[9].offsetTop + borderBottom[9].offsetTop) {
                    textChange.innerHTML = "2014";
                  } else if (absoluteTop >= borderBottomParent[9].offsetTop + borderBottom[9].offsetTop && absoluteTop < borderBottomParent[10].offsetTop + borderBottom[10].offsetTop) {
                    textChange.innerHTML = "2013";
                  } else if (absoluteTop >= borderBottomParent[10].offsetTop + borderBottom[10].offsetTop) {
                    textChange.innerHTML = "2012";
                  }
                } else {
                  fixedYear.classList.remove("fixed");
                  unfixed2022.style.opacity = "1";
                  unfixed2012.style.opacity = "1";
                }
              });
            }
          });

          addEventListener("scroll", function () {
            let value = this.scrollY;
            let relativeTop = fixedYear.getBoundingClientRect().top;
            let scrolledTopLength = window.pageYOffset;
            let absoluteTop = scrolledTopLength + relativeTop;
            
            if (
              value > historyHeadOffsetTop - 60 &&
              value <= offsetParent + monthOffsetTop
            ) {
              
              fixedYear.classList.add("fixed");
              unfixed2022.style.opacity = "0";
              unfixed2012.style.opacity = "0";

              if (absoluteTop < borderBottomParent[0].offsetTop + borderBottom[0].offsetTop) {
                textChange.innerHTML = "2023";
              } else if (absoluteTop >= borderBottomParent[0].offsetTop + borderBottom[0].offsetTop && absoluteTop < borderBottomParent[1].offsetTop + borderBottom[1].offsetTop) {
                textChange.innerHTML = "2022";
              } else if (absoluteTop >= borderBottomParent[1].offsetTop + borderBottom[1].offsetTop && absoluteTop < borderBottomParent[2].offsetTop + borderBottom[2].offsetTop) {
                textChange.innerHTML = "2021";
              } else if (absoluteTop >= borderBottomParent[2].offsetTop + borderBottom[2].offsetTop && absoluteTop < borderBottomParent[3].offsetTop + borderBottom[3].offsetTop) {
                textChange.innerHTML = "2020";
              } else if (absoluteTop >= borderBottomParent[3].offsetTop + borderBottom[3].offsetTop && absoluteTop < borderBottomParent[4].offsetTop + borderBottom[4].offsetTop) {
                textChange.innerHTML = "2019";
              } else if (absoluteTop >= borderBottomParent[4].offsetTop + borderBottom[4].offsetTop && absoluteTop < borderBottomParent[5].offsetTop + borderBottom[5].offsetTop) {
                textChange.innerHTML = "2018";
              } else if (absoluteTop >= borderBottomParent[5].offsetTop + borderBottom[5].offsetTop && absoluteTop < borderBottomParent[6].offsetTop + borderBottom[6].offsetTop) {
                textChange.innerHTML = "2017";
              } else if (absoluteTop >= borderBottomParent[6].offsetTop + borderBottom[6].offsetTop && absoluteTop < borderBottomParent[7].offsetTop + borderBottom[7].offsetTop) {
                textChange.innerHTML = "2016";
              } else if (absoluteTop >= borderBottomParent[7].offsetTop + borderBottom[7].offsetTop && absoluteTop < borderBottomParent[8].offsetTop + borderBottom[8].offsetTop) {
                textChange.innerHTML = "2015";
              } else if (absoluteTop >= borderBottomParent[8].offsetTop + borderBottom[8].offsetTop && absoluteTop < borderBottomParent[9].offsetTop + borderBottom[9].offsetTop) {
                textChange.innerHTML = "2014";
              } else if (absoluteTop >= borderBottomParent[9].offsetTop + borderBottom[9].offsetTop && absoluteTop <borderBottomParent[10].offsetTop + borderBottom[10].offsetTop) {
                textChange.innerHTML = "2013";
              } else if (absoluteTop >= borderBottomParent[10].offsetTop + borderBottom[10].offsetTop) {
                textChange.innerHTML = "2012";
              }
            } else {

              fixedYear.classList.remove("fixed");
              unfixed2022.style.opacity = "1";
              unfixed2012.style.opacity = "1";
            }
          });
        }

        // 반응형을 위한 fixed풀림 위치 리사이징 함수
        window.addEventListener("resize", function () {
          if (isSmallScreen() === true) {
            
            addEventListener("scroll", function () {
              fixedYear.classList.remove("fixed");
              unfixed2022.style.opacity = "1";
              unfixed2012.style.opacity = "1";

            });
          } else {
            
            addEventListener("scroll", function () {
              
              let value = this.scrollY;
              let relativeTop = fixedYear.getBoundingClientRect().top; 
              let scrolledTopLength = window.pageYOffset;
              let absoluteTop = scrolledTopLength + relativeTop;

              if (
                value > historyHeadOffsetTop - 60 &&
                value <= offsetParent + monthOffsetTop
              ) {
                
                fixedYear.classList.add("fixed");
                unfixed2022.style.opacity = "0";
                unfixed2012.style.opacity = "0";

                //console.log("absoluteTop : "+absoluteTop);
                //console.log("borderBottomParent : "+borderBottomParent[0].offsetTop);
                //console.log("borderBottom : "+borderBottom[0].offsetTop);
                if (absoluteTop < borderBottomParent[0].offsetTop + borderBottom[0].offsetTop) {
                  textChange.innerHTML = "2023";
                
                } else if (absoluteTop >= borderBottomParent[0].offsetTop + borderBottom[0].offsetTop && absoluteTop < borderBottomParent[1].offsetTop + borderBottom[1].offsetTop) {
                  textChange.innerHTML = "2022";
                } else if (absoluteTop >= borderBottomParent[1].offsetTop + borderBottom[1].offsetTop && absoluteTop < borderBottomParent[2].offsetTop + borderBottom[2].offsetTop) {
                  textChange.innerHTML = "2021";
                } else if (absoluteTop >= borderBottomParent[2].offsetTop + borderBottom[2].offsetTop && absoluteTop < borderBottomParent[3].offsetTop + borderBottom[3].offsetTop) {
                  textChange.innerHTML = "2020";
                } else if (absoluteTop >= borderBottomParent[3].offsetTop + borderBottom[3].offsetTop && absoluteTop < borderBottomParent[4].offsetTop + borderBottom[4].offsetTop) {
                  textChange.innerHTML = "2019";
                } else if (absoluteTop >= borderBottomParent[4].offsetTop + borderBottom[4].offsetTop && absoluteTop < borderBottomParent[5].offsetTop + borderBottom[5].offsetTop) {
                  textChange.innerHTML = "2018";
                } else if (absoluteTop >= borderBottomParent[5].offsetTop + borderBottom[5].offsetTop && absoluteTop < borderBottomParent[6].offsetTop + borderBottom[6].offsetTop) {
                  textChange.innerHTML = "2017";
                } else if (absoluteTop >= borderBottomParent[6].offsetTop + borderBottom[6].offsetTop && absoluteTop < borderBottomParent[7].offsetTop + borderBottom[7].offsetTop) {
                  textChange.innerHTML = "2016";
                } else if (absoluteTop >= borderBottomParent[7].offsetTop + borderBottom[7].offsetTop && absoluteTop < borderBottomParent[8].offsetTop + borderBottom[8].offsetTop) {
                  textChange.innerHTML = "2015";
                } else if (absoluteTop >= borderBottomParent[8].offsetTop + borderBottom[8].offsetTop && absoluteTop < borderBottomParent[9].offsetTop + borderBottom[9].offsetTop) {
                  textChange.innerHTML = "2014";
                } else if (absoluteTop >= borderBottomParent[9].offsetTop + borderBottom[9].offsetTop && absoluteTop < borderBottomParent[10].offsetTop + borderBottom[10].offsetTop) {
                  textChange.innerHTML = "2013";
                } else if (absoluteTop >= borderBottomParent[10].offsetTop + borderBottom[10].offsetTop) {
                  textChange.innerHTML = "2012";
                }
              } else {

                fixedYear.classList.remove("fixed");
                unfixed2022.style.opacity = "1";
                unfixed2012.style.opacity = "1";
              }
            });
          }
        });
      </script>