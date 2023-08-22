const input = document.querySelectorAll("input");

/**
 * 初始位置設置為0
 */
const newInput = Array.from(input);
let firstOrder = 0;

/**
 *
 * @param {test} e
 * 利用test取得當前的target 這裡的checkEl要找出當前哪一個checkbox被點擊
 *  另外當前target shiftKey屬性如果是true的話 就會invoke checked
 * 最後再將這ㄧ次點擊位置設置成下次的起始位置
 */
const test = function (e) {
  const test = e.target;
  const checkEl = newInput.indexOf(test);
  if (e.shiftKey === true) checked(checkEl);
  firstOrder = checkEl;
};

/**
 *
 * @param {checked} checkEl
 * checked這個方法是要判斷起始值與末值的關係 並添加checked屬性
 * 如果末值大於起始值 就跑迴圈 將小到大的元素取出並添加checked屬性
 * 反之末值小於起始值 就將小到大元素取出增添checked屬性
 */
const checked = function (checkEl) {
  if (checkEl > firstOrder) {
    for (i = firstOrder; i < checkEl; i++) {
      input[i].checked = true;
    }
  } else {
    for (i = checkEl; i < firstOrder; i++) input[i].checked = true;
  }
};

//找出第幾個input被點擊
input.forEach((item) => item.addEventListener("click", test));
