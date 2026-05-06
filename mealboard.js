const btn = document.getElementById("btn");
const mealCards = document.querySelectorAll(".meal-card");
const status = document.getElementById("status");
/*클릭했을 때*/ btn.addEventListener("click", async function () {
  status.innerText = "로딩중";
  try {
    const res = await fetch(
      "https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=3e77d09b778e43ccb762f2e5e5a69b26&Type=json&ATPT_OFCDC_SC_CODE=F10&SD_SCHUL_CODE=7380031&MLSV_YMD=20260408",
    );
    const data = await res.json();
    status.innerText = "";
    const rows = data.mealServiceDietInfo[1].row;
    let menu = rows[0].DDISH_NM.split("<br/>");
    menu = menu.map((item) => item.replace(/\([^)]*\)/g, "").trim());
    const text = menu.join("<br>");
    mealCards.forEach((card) => {
      card.innerHTML = text;
    });
  } catch (e) {
    status.innerText = "에러 발생";
  }
});
