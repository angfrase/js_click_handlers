const colorBox = document.querySelector("#color-box");
const grayButton = document.querySelector("#gray-button");
grayButton.addEventListener("click", function () {
    colorBox.className = "gray";
})
const blueButton = document.querySelector("#blue-button");
blueButton.addEventListener("click", function () {
    colorBox.className = "blue";
})
const pinkButton = document.querySelector("#pink-button");
pinkButton.addEventListener("click", function () {
    colorBox.className = "pink";
})
let count = 0;
const countspan = document.querySelector("#countspan");
const counterButton = document.querySelector("#counter-button");
counterButton.addEventListener("click", function () {
    let countValue = Number(countspan.innerHTML) + 1;
    countspan.innerHTML = countValue;
})
const evenorOddButton = document.querySelector("#even-or-odd-button");
evenorOddButton.addEventListener("click", function () {
    let countValue = Number(countspan.innerHTML)
    if (countValue % 2 === 0) {
        alert("Even");
    } else {
        alert("Odd");
    }
})
