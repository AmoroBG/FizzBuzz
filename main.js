// Variables Declarations
let inputBox = document.getElementById("input-box");
let playGame = document.getElementById("play-game")
let resultBoard = document.getElementById("result-board-counts")
let number;


// Add eventListener to the play button
playGame.addEventListener("click", function() {
    number = parseInt(inputBox.value)
    const validInput = validateInput();
    if (!validInput) {
        return;
    }
    // console.log(fizzBuzz())
    // resultBoard.innerText = fizzBuzz()
    fizzBuzz()
    inputBox.value = ""
})

// Prompt user for the number
// let number = parseInt(prompt("Enter a number"))

//validateInput function
function validateInput() {
    if (number < 1 || number > 100) {
        alert("Number must be between 1 and 100")
        return false
    }
    return true
}
// fizzBuzz function
function fizzBuzz() {
    let counts = "";
    resultBoard.innerText = "";
    for (let i = 1; i <= number; i++) {
        if ((i % 3 === 0) && (i % 5 == 0)) {
            // multiples of both three and five print 'FizzBuzz'
            counts = "FizzBuzz"
        } else if (i % 3 === 0) {
            // multiples of three print 'Fizz'
            counts = "Fizz"
        } else if (i % 5 === 0) {
            // multiples of five print 'Buzz'
            counts = "Buzz"
        } else {
            counts = i
        }
        resultBoard.innerText += counts + "\u00a0"
    }

}