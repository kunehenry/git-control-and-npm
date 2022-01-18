var _ = require('lodash');

var array = [1,2,3,4,5,6,7,8];
console.log("answer:", _.without(array, 3));
//don't see anyhing, need to put in bundle.js: browserify script.js > bundle.js

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("randomButton");

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent =  body.style.background + ";";
}

function randomNumber() {
    var hextable = "0123456789ABCDEF";
    var hexnumber = "#";
    for(var i = 0; i < 6; i++) {
        hexnumber += hextable[Math.floor(Math.random()*16)];
    }
    return hexnumber;
}

function setRandomColor() {
    color1.value = randomNumber();
    color2.value = randomNumber();
    setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", setRandomColor)

setGradient();

