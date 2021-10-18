//hex color constructor array
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const button = document.getElementById("btn");
const colorName = document.querySelector(".color");

button.addEventListener("click", function() {
    //set the base value of the code, which is the starting #
    let hexCode = "#"; 
    //set up a conditional loop that generates 6 numbers
    for(let i = 0; i < 6; i++) {
        hexCode += hex[getRandomNumber()]; //have to have =+ to add a value up to 6
    }
    //update the body color
    document.body.style.backgroundColor = hexCode;
    //list the hex color id on the screen
    colorName.innerText = hexCode;
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}
