// const endpoint =
//   "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
// const search = document.querySelector(".search");
// const suggestion = document.querySelector(".suggestions");
// const liColor = document.querySelector(".li");
// let fetchData = [];

// //請求資料
// async function ajax() {
//   try {
//     const linkTest = await fetch(endpoint);
//     if (!linkTest.ok)
//       throw new Error(`${linkTest.status} ${linkTest.statusText}`);
//     fetchData = await linkTest.json();
//     search.addEventListener("input", obsInput);
//   } catch (error) {
//     console.error(error);
//   }
// }

// //樣板文字
// const template = function (data, test) {
//   const cityName = data.city.toLowerCase();
//   const stateName = data.state.toLowerCase();
//   const text = `
//   <li class="${
//     cityName.includes(test) || stateName.includes(test) ? "hl" : ""
//   }">${data.city}, ${data.state}</li>
// `;
//   suggestion.insertAdjacentHTML("afterbegin", text);
// };

// //篩選字詞
// const obsInput = function (e) {
//   suggestion.innerHTML = "";
//   const inputText = e.target.value.toLowerCase();

//   const fetchInput = fetchData.filter((word) => {
//     if (
//       word.city.toLowerCase().includes(inputText) ||
//       word.state.toLowerCase().includes(inputText)
//     ) {
//       return word;
//     }
//   });
//   fetchInput.forEach((data) => template(data, inputText));
// };

// ajax();

const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const search = document.querySelector(".search");
const suggestion = document.querySelector(".suggestions");
const liColor = document.querySelector(".li");
let fetchData = [];

//請求資料
async function ajax() {
  try {
    const linkTest = await fetch(endpoint);
    if (!linkTest.ok)
      throw new Error(`${linkTest.status} ${linkTest.statusText}`);
    fetchData = await linkTest.json();
    search.addEventListener("input", template);
  } catch (error) {
    console.error(error);
  }
}

//樣板文字
const template = function (e) {
  let inputText = e.target.value;

  const fetchInput = fetchData.filter((word) => {
    //設置好條件
    const regex = new RegExp(inputText, "gi");
    return word.city.match(regex) || word.state.match(regex);
  });

  const html = fetchInput
    .map((item) => {
      //這裡是篩選條件
      const regex = new RegExp(inputText, "gi");

      /**item.city會被尋找 是否與regex相匹配的值
       * 如果有就會被替換
       */
      const cityName = item.city.replace(
        regex,
        `<span class="hl">${inputText}</span>`
      );

      //同上
      const stateName = item.state.replace(
        regex,
        `<span class="hl">${inputText}</span>`
      );
      return `
    <li>
      <span>${cityName}, ${stateName}</span>
      <span>${insertCommas(item.population)}</<span>>
    </li>`;
    })
    .join();
  suggestion.innerHTML = html;
};

//確保每三位數就插入逗號
function insertCommas(word) {
  return word.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

ajax();
