


window.addEventListener("scroll", () => {
  const fadeIns = document.querySelectorAll('.fade-in');

  for (let i = 0; i < fadeIns.length; i++) {
    const fadeIn = fadeIns[i];
    const imgMove = fadeIn.getBoundingClientRect().bottom;

    if (imgMove <= window.innerHeight) {
      fadeIn.classList.add('active');
    }
  }
});


document.addEventListener('DOMContentLoaded', function () {

  // 첫 화면 애니메이션 효과
  var brandStoryLeft = document.querySelectorAll('.brand_story_left')[0];
  brandStoryLeft.style.opacity = 1;
  brandStoryLeft.style.transition = 'opacity 1s linear';

  var brandStoryTitleWrapP = document.querySelectorAll('.brand_story_wrap .brand_story_titlewrap p');
  brandStoryTitleWrapP.forEach(function (item, index) {
    setTimeout(function () {
      item.style.opacity = 1;
      item.style.right = '0';
      item.style.transition = 'opacity 400ms linear, right 400ms linear';
    }, 250 * index);
  });

  setTimeout(function () {
    var brandStoryTxtWrap = document.querySelector('.brand_story_wrap .brand_story_txtwrap');
    brandStoryTxtWrap.style.opacity = 1;
    brandStoryTxtWrap.style.transition = 'opacity 1s linear';
  }, 400);

  // 스크롤 시 요소 애니메이션 효과
  window.addEventListener('scroll', function () {

    var scrollHeight = window.pageYOffset;
    var sectionHeight = document.querySelector('.brand_story_wrap').offsetHeight;

    if (scrollHeight >= sectionHeight / 2) {
      var brandStoryLeftSecond = document.querySelectorAll('.brand_story_left')[1];
      brandStoryLeftSecond.style.opacity = 1;
      brandStoryLeftSecond.style.transition = 'opacity 1s linear';

      document.querySelectorAll('.brand_slogan_wrap .brand_story_titlewrap p').forEach(function (item, index) {
        setTimeout(function () {
          item.style.opacity = 1;
          item.style.right = '0';
          item.style.transition = 'opacity 400ms linear, right 400ms linear';
        }, 250 * index);
      });

      setTimeout(function () {
        var brandSloganTxtWrap = document.querySelector('.brand_slogan_wrap .brand_story_txtwrap');
        brandSloganTxtWrap.style.opacity = 1;
        brandSloganTxtWrap.style.transition = 'opacity 1s linear';
      }, 400);
    }
    if (scrollHeight >= sectionHeight * 1.5) {
      var brandStoryVideo = document.querySelector('.brand_story_video');
      brandStoryVideo.style.opacity = 1;
      brandStoryVideo.style.bottom = '0';
      brandStoryVideo.style.transition = 'opacity 750ms linear, bottom 750ms linear';
    }
  });
});
