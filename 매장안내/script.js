import stores from "./stores.js";

const form = document.querySelector("form");
const services = document.querySelectorAll("input[type='checkbox]");
const locates = document.querySelectorAll(".locate_name");

const city = document.querySelector("#city")
const state = document.querySelector("#state");

const pages = document.querySelectorAll(".page_number a");





locates.forEach((locate) => {
  locate.addEventListener("click", (e) => {
    const active = document.querySelector(".active");
    e.preventDefault();
    active.classList.remove("active");
    e.target.classList.add("active");

    const locateId = e.target.id;
    for (let i = 0; i < city.options.length; i++) {
      if (city.options[i].value === locateId) {
        city.selectedIndex = i;
      }
    }

    selectCity();
  });
});

const activeEvent = (e) => {
  const active = document.querySelector(".active");
  e.preventDefault();
  active.classList.remove("active");
  e.target.classList.add("active");
}

const selectCity = () => {
  const selectedCity = city.value;

  if (selectedCity === "강원") {
    state.innerHTML = `
    <option value="구/군 선택">구/군 선택</option>
    <option value="강릉시">강릉시</option>
    <option value="고성군">고성군</option>
    <option value="동해시">동해시</option>
    <option value="삼척시">삼척시</option>
    <option value="속초시">속초시</option>
    <option value="양구군">양구군</option>
    <option value="양양군">양양군</option>
    <option value="영월군">영월군</option>
    <option value="원주시">원주시</option>
    <option value="인제군">인제군</option>
    <option value="정선군">정선군</option>
    <option value="철원군">철원군</option>
    <option value="춘천시">춘천시</option>
    <option value="평창군">평창군</option>
    <option value="홍천군">홍천군</option>
    <option value="화천군">화천군</option>
    <option value="횡성군">횡성군</option>
    `
  } else if (selectedCity === "경기") {
    state.innerHTML = `
    <option value="구/군 선택">구/군 선택</option>
    <option value="가평군">가평군</option>
    <option value="고양시 덕양구">고양시 덕양구</option>
    <option value="고양시 일산동구">고양시 일산동구</option>
    <option value="고양시 일산서구">고양시 일산서구</option>
    <option value="과천시">과천시</option>
    <option value="구리시">구리시</option>
    <option value="군포시">군포시</option>
    <option value="김포시">김포시</option>
    <option value="남양주시">남양주시</option>
    <option value="동두천시">동두천시</option>
    <option value="부천시">부천시</option>
    <option value="부천시 오정구">부천시 오정구</option>
    <option value="부천시 원미구">부천시 원미구</option>
    <option value="부천시 소사구">부천시 소사구</option>
    <option value="성남시 분당구">성남시 분당구</option>
    <option value="성남시 수정구">성남시 수정구</option>
    <option value="성남시 중원구">성남시 중원구</option>
    <option value="수원시 권선구">수원시 권선구</option>
    <option value="수원시 영통구">수원시 영통구</option>
    <option value="수원시 장안구">수원시 장안구</option>
    <option value="수원시 팔달구">수원시 팔달구</option>
    <option value="시흥시">시흥시</option>
    <option value="안산시 단원구">안산시 단원구</option>
    <option value="안산시 상록구">안산시 상록구</option>
    <option value="안성시">안성시</option>
    <option value="안양시 동안구">안양시 동안구</option>
    <option value="안양시 만안구">안양시 만안구</option>
    <option value="양주시">중구</option>
    <option value="양평시">중구</option>
    <option value="여주시">중구</option>
    <option value="연천시">중구</option>
    <option value="오산시">중구</option>
    <option value="용인시 기흥구">중구</option>
    <option value="용인시 수지구">중구</option>
    <option value="용인시 처인구">중구</option>
    <option value="의왕시">중구</option>
    <option value="의정부시">중구</option>
    <option value="이천시">중구</option>
    <option value="파주시">중구</option>
    <option value="평택시">중구</option>
    <option value="포천시">중구</option>
    <option value="하남시">중구</option>
    `
  } else if (selectedCity === "인천") {
    state.innerHTML = `
    <option value="구/군 선택">구/군 선택</option>
    <option value="강화군">강화군</option>
    <option value="계양구">계양구</option>
    <option value="남구">남구</option>
    <option value="남동구">남동구</option>
    <option value="동구">동구</option>
    <option value="부평구">부평구</option>
    <option value="연수구">연수구</option>
    <option value="옹진구">옹진구</option>
    <option value="중구">중구</option>
    `
  }
}


city.addEventListener("change", selectCity);

pages.forEach((page) => {
  page.addEventListener("click", activeEvent)
});


