import stores from "./stores.js";

const form = document.querySelector("form");
const services = document.querySelectorAll("input[type='checkbox']");
const locates = document.querySelectorAll(".locate_name");

const city = document.querySelector("#city")
const state = document.querySelector("#state");
const name = document.querySelector("#store_name");

const pages = document.querySelectorAll(".page_number a");




//스크롤시 fade-in클래스가 포함된 section에 active클래스를 추가
const activeEvent = (e) => {
  const active = document.querySelector(".active");
  e.preventDefault();
  active.classList.remove("active");
  e.target.classList.add("active");
};


//table 리스트 전체 제거
const removeItems = () => {
  const items = document.querySelectorAll("tbody tr");
  items.forEach((item) => {
    item.remove();
  });
};

//table리스트 생성
const createItem = function (store) {
  const tbody = document.querySelector("tbody");
  const tr = document.createElement("tr");

  for (let i = 0; i < 5; i++) {
    const td = document.createElement("td");

    switch (i) {
      case 0:
        td.innerText = `${store.name}`
        break;
      case 1:
        td.innerText = `${store.locate}`
        break;
      case 2:
        td.innerText = `${store.adrress}`
        break;
      case 3:
        td.innerText = `${store.tel}`
        break;
      case 4:
        for (let i = 0; i < store.srv.length; i++) {
          const img = document.createElement("img");
          const attr = document.createAttribute("src");
          attr.value = store.srv[i];
          img.setAttributeNode(attr);
          td.append(img);
        }
        break;
    }

    tr.append(td);
  }
  // tr.innerHTML = `
  // <td>${store.name}</td>
  // <td>${store.locate}</td>
  // <td>${store.adrress}</td>
  // <td>${store.tel}</td>
  // <td>${store.srv}</td>
  // `

  tbody.appendChild(tr);
};

//select태그에서 option요소를 선택했을 때, 값에 따라 연결되어 있는 select태그의 option값 
const selectCity = () => {
  const selectedCity = city.value;

  if (selectedCity === "강원") {
    state.innerHTML = `
    <option value = "구/군 선택" > 구/군 선택</option>
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
    <option value = "구/군 선택" > 구/군 선택</option>
    <option value="가평군">가평군</option>
    <option value="고양시">고양시</option>
    <option value="과천시">과천시</option>
    <option value="구리시">구리시</option>
    <option value="군포시">군포시</option>
    <option value="김포시">김포시</option>
    <option value="남양주시">남양주시</option>
    <option value="동두천시">동두천시</option>
    <option value="부천시">부천시</option>
    <option value="성남시">성남시</option>
    <option value="수원시">수원시</option>
    <option value="시흥시">시흥시</option>
    <option value="안산시">안산시</option>
    <option value="안성시">안성시</option>
    <option value="안양시">안양시</option>
    <option value="양주시">양주시</option>
    <option value="양평시">양평시</option>
    <option value="여주시">여주시</option>
    <option value="연천시">연천시</option>
    <option value="오산시">오산시</option>
    <option value="용인시">용인시</option>
    <option value="의왕시">의왕시</option>
    <option value="의정부시">의정부시</option>
    <option value="이천시">이천시</option>
    <option value="파주시">파주시</option>
    <option value="평택시">평택시</option>
    <option value="포천시">포천시</option>
    <option value="하남시">하남시</option>
  `
  } else if (selectedCity === "경남") {
    state.innerHTML = `
    <option value = "구/군 선택" > 구/군 선택</option>
    <option value="거제시">거제시</option>
    <option value="고성군">고성군</option>
    <option value="남해군">남해군</option>
    <option value="사천시">사천시</option>
    <option value="양산시">양산시</option>
    <option value="진주시">진주시</option>
    <option value="하동군">하동군</option>
    <option value="함안군">함안군</option>
  `
  } else if (selectedCity === "경북") {
    state.innerHTML = `
    <option value = "구/군 선택" > 구/군 선택</option>
    <option value="경주시">경주시</option>
    <option value="안동시">안동시</option>
    <option value=영주시">영주시</option>
    < option value = "예천군" > 예천군</ >
      `
  } else if (selectedCity === "광주") {
    state.innerHTML = `
    <option value = "구/군 선택" > 구/군 선택</option>
        `
  } else if (selectedCity === "대구") {
    state.innerHTML = `
        < option value = "구/군 선택" > 구 / 군 선택</ >
          <option value="달성군">달성군</option>
  `
  } else if (selectedCity === "대전") {
    state.innerHTML = `
    <option value = "구/군 선택" > 구/군 선택</option>
    <option value="유성구">유성구</option>
    <option value="서구">서구</option>
  `
  } else if (selectedCity === "부산") {
    state.innerHTML = `
    <option value = "구/군 선택" > 구/군 선택</option>
    <option value="기장군">기장군</option>
    <option value="남구">남구</option>
    <option value="동래구">동래구</option>
    <option value="수영구">수영구</option>
    <option value="부산진구">부산진구</option>
    <option value="사하구">사하구</option>
  `
  } else if (selectedCity === "서울") {
    state.innerHTML = `
    <option value = "구/군 선택" > 구/군 선택</option>
    <option value="강남구">강남구</option>
    <option value="강북구">강북구</option>
    <option value="강서구">강서구</option>
    <option value="관악수">관악수</option>
    <option value="구로구">구로구</option>
    <option value="금천구">금천구</option>
    <option value="도봉구">도봉구</option>
    <option value="동대문구">동대문구</option>
    <option value="동작구">동작구</option>
    <option value="마포구">마포구</option>
    <option value="서대문구">서대문구</option>
    <option value="서초구">서초구</option>
    <option value="성동구">성동구</option>
    <option value="성북구">성북구</option>
    <option value="양천구">양천구</option>
    <option value="영등포구">영등포구</option>
    <option value="송파구">송파구</option>
    <option value="종로구">종로구</option>
    <option value="중구">중구</option>
  `
  } else if (selectedCity === "세종") {
    state.innerHTML = `
    <option value = "구/군 선택" > 구/군 선택</option>
      `
  } else if (selectedCity === "울산") {
    state.innerHTML = `
    <option value = "구/군 선택" > 구/군 선택</option>
    <option value="남구">남구</option>
    <option value="중구">중구</option>
  `
  } else if (selectedCity === "인천") {
    state.innerHTML = `
    <option value = "구/군 선택" > 구/군 선택</option>
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
  } else if (selectedCity === "전남") {
    state.innerHTML = `
    <option value = "구/군 선택" > 구/군 선택</option>
    <option value="광양시">광양시</option>
    <option value="강진군">강진군</option>
    <option value="목포시">목포시</option>
    <option value="순천시">순천시</option>
    <option value="여수시">여수시</option>
  `
  } else if (selectedCity === "전북") {
    state.innerHTML = `
    <option value = "구/군 선택" > 구/군 선택</option>
    <option value="군산시">군산시</option>
    <option value="익산시">익산시</option>
    <option value="전주시">전주시</option>
  `
  } else if (selectedCity === "제주") {
    state.innerHTML = `
    <option value = "구/군 선택" > 구/군 선택</option>
    <option value="제주시">제주시</option>
    <option value="서귀포시">서귀포시</option>
  `
  } else if (selectedCity === "충남") {
    state.innerHTML = `
    <option value = "구/군 선택" > 구/군 선택</option>
    <option value="계룡시">계룡시</option>
    <option value="당진시">당진시</option>
    <option value="보령시">보령시</option>
    <option value="아산시">아산시</option>
    <option value="예산군">예산군</option>
    <option value="천안시">천안시</option>
    <option value="태안군">태안군</option>
    <option value="홍성군"></option>
    <option value="홍성군"></option>
  `
  } else if (selectedCity === "충북") {
    state.innerHTML = `
    <option value = "구/군 선택" > 구/군 선택</option>
    <option value="제천시">제천시</option>
    <option value="청주시">청주시</option>
  `
  }
}

//지도에서 span태그를 클릭했을 때 select태그와 연결 
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

    const filtered = stores.data.filter((store) => {
      return store.locate === locateId;
    });

    removeItems();

    if (filtered.length === 0) {
      const tbody = document.querySelector("tbody");
      const tr = document.createElement("tr");
      for (let i = 0; i < 5; i++) {
        const td = document.createElement("td");
        if (i === 2) {
          td.innerText = "등록된 매장이 없습니다!"
        }
        tr.append(td);
      }
      tbody.append(tr);
    } else {
      filtered.forEach((store) => {
        createItem(store);
      });
    }

    selectCity();
  });
});

const searchResult = (e) => {
  e.preventDefault();
  city.value
  state.value
  name.value
  services.forEach((service) => {
    service.addEventListener("change", function (e) {
      return e.target.id;
    })
  })
  const filtered = stores.data.filter((store) => {
    return store.locate === locateId;
  });

  removeItems();

  if (filtered.length === 0) {
    const tbody = document.querySelector("tbody");
    const tr = document.createElement("tr");
    for (let i = 0; i < 5; i++) {
      const td = document.createElement("td");
      if (i === 2) {
        td.innerText = "등록된 매장이 없습니다!"
      }
      tr.append(td);
    }
    tbody.append(tr);
  } else {
    filtered.forEach((store) => {
      createItem(store);
    });
  }
}

const importData = () => {
  stores.data.map((store) => {
    if (!document.getElementById(store.name)) {
      createItem(store);
    }
  });
};

document.addEventListener("DOMContentLoaded", importData);
form.addEventListener("submit", searchResult);
city.addEventListener("change", selectCity);
pages.forEach((page) => {
  page.addEventListener("click", activeEvent)
});


