//color array - to text, use different values to make sure the code will work regardless - for final, changed to color names
const colors = ["AliceBlue", "DarkSlateBlue", "Thistle", "PowderBlue", "DarkOrchid", "LavenderBlush", "LightSteelBlue", "Plum", "RebeccaPurple", "PaleVioletRed", "Lavender"];
//button that triggers color change
const button = document.getElementById("btn");
//color name that grabs and updates the "Background Color" heading and fills in the current color code
let colorName = document.querySelector(".color");

//set up an event listener on the button to trigger a change in the background color
button.addEventListener("click", function() {
//select a random number between 0 and 3 (length of array), display the color at that index, update the color name to that index
const randomNumber = getRandomNumber();
console.log(randomNumber);
document.body.style.backgroundColor = colors[randomNumber];
colorName.innerText = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
