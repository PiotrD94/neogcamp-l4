var txtinput = document.querySelector("#inputarea-translate");
var txtoutput = document.querySelector("#outputarea-translate");
var button = document.querySelector(
    "#button-translate");

console.log("hello script is working");
button.addEventListener("click", clickTranslate)

function clickTranslate() {
    console.log("Clicked!");
    console.log("input", txtinput.value);
    txtoutput.innerText = txtinput.value;
}

