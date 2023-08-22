const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

const p = document.querySelector("p");
function makeGreen() {
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular

console.log("夭壽讚");

// Interpolated

console.log("這裡是台南市,%s", "東區");

// Styled

console.log(
  "%c夭壽讚",
  "color:red; font-weight:900;font-size:5rem; border:3px solid green"
);

// warning!

console.warn("明明就缺電 為什麼不承認");

// Error :

console.error("404 NotFound");

// Info

console.info("您好，敝姓鳳，鳳梨酥的鳳");

// Testing
console.assert("ken" === "olivia", "有辦法走到最後嗎");

// clearing

//console.clear();

// Viewing DOM Elements

console.log(p);
console.dir(p);

// Grouping together

dogs.forEach((dog) => {
  console.group(dog.name);
  console.log(`${dog.name}已經${dog.age}歲了!`);
  console.groupEnd(dog.name);
});

// counting

const text = [
  "f",
  "s",
  "d",
  "s",
  "s",
  "a",
  "g",
  "q",
  "f",
  "d",
  "y",
  "f",
  "d",
  "s",
  "a",
];
text.forEach((t) => console.count(t));

// timing
function reverse(para) {
  const newText = [];
  let i = para.length - 1;
  while (i >= 0) {
    newText.push(para[i]);
    i--;
  }
  return newText;
}
const newText = reverse(text);
console.time("開始");
for (let i = newText.length - 1; i >= 0; i--) {
  newText[i] = new Object();
}
console.timeEnd("結束");
