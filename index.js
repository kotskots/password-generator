const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let passOneEl = document.getElementById("password-one");
let passTwoEl = document.getElementById("password-two");
let copyMsg = document.getElementById("copy-msg");

function generatePasswords() {
  passOneEl.textContent = "";
  passTwoEl.textContent = "";
  for (let i = 0; i < 16; i++) {
    passOneEl.textContent +=
      characters[Math.floor(Math.random() * characters.length)];
    passTwoEl.textContent +=
      characters[Math.floor(Math.random() * characters.length)];
  }
}

function copyPasswordOne() {
  navigator.clipboard.writeText(passOneEl.textContent).then(() => {
    copyMsg.textContent = "Password copied!";
    setTimeout(() => {
      copyMsg.textContent = "";
    }, 1500);
  });
}

function copyPasswordTwo() {
  navigator.clipboard.writeText(passTwoEl.textContent).then(() => {
    copyMsg.textContent = "Password copied!";
    setTimeout(() => {
      copyMsg.textContent = "";
    }, 1500);
  });
}
