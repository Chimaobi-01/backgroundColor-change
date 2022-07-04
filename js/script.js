const colors = ["blue", "red", "green",
 "black", "aliceblue",
 "  antiquewhite", "aqua", "aquamarine",
 " azure", "beige", "bisque",
 "blanchedalmond", " linen", "magenta",
 "blueviolet", "maroon", "brown",
 " mediumaquamarine", "burlywood",
 " mediumblue", " cadetblue",
 " mediumorchid "
];
const body = document.querySelector(
 'body');
const button = document.querySelector(
 'button');
body.style.backgroundColor = "violet";
button.addEventListener('click',
 changeBgColor);
button.addEventListener('click',
 changeButtonSize);



function changeBgColor() {
 const colorIndex = parseInt(Math
  .random() * colors.length);
 body.style.backgroundColor = colors[
  colorIndex];
}

function changeButtonSize() {
 button.style.letterSpacing = "4px";
 button.style.padding =
  "20px 25px 20px 25px";
 button.style.transition = "0.5s";
 setTimeout(returnBtnSize, 900);
}

function returnBtnSize() {
 button.style.padding =
  "15px 20px 15px 20px";
 button.style.letterSpacing = "2px";
}

