//wifi = './img/wifi.svg'
//park = './img/park.svg'
//smoke = './img/smoke.svg'
//parasol = './img/parasol.svg'
//mobile = './img/mobile.svg'

const stores = {
  data: [
    {
      name: "평택서재자이점",
      locate: "경기",
      adrress: "경기 평택시 동삭동 715-1 1층",
      tel: "031-625-1777",
      srv: [
        './img/wifi.svg',
        './img/parasol.svg',
      ]
    },
    {
      name: "청라국제도시점",
      locate: "인천",
      adrress: "인천 서구 청라한내로 110 (청라동) 1층",
      tel: "070-8657-3336",
      srv: [
        wifi,
        park,
        smoke,
        parasol,
        mobile,
      ]
    },
    {
      name: "영월점",
      locate: "강원",
      adrress: "강원특별자치도 영월군 영월읍 청령포로 111 (방절리) 1층, 셀렉토커피 영월점",
      tel: "033-373-5557",
      srv: [
        wifi,
        park,
        parasol,
      ]
    },
    {
      name: "창동역점",
      locate: "서울",
      adrress: "서울 도봉구 마들로11가길 16 (창동, KING 프라자) 1층",
      tel: "029940313",
      srv: [
      ]
    },
    {
      name: "삼성전자 화성캠퍼스점",
      locate: "경기",
      adrress: "경기 화성시 삼성전자로 1 (반월동) 셀렉토커피 삼성전자 화성캠퍼스점",
      tel: "",
      srv: [
      ]
    },
  ]
}
console.log(stores)

export default stores