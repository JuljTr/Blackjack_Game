console.log("hello world")

let cardsText = document.querySelector("#cards-text");
let sumText = document.querySelector("#cards-sum");
let text = document.querySelector("#text");
let startBtn = document.querySelector("#start-btn");
let newCardBtn = document.querySelector("#card-btn");


let firstNum = 10;
let secondNum = 11;
let sum = firstNum + secondNum;
let message = "";

function startGame(){
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
    } else if (sum > 21) {
        message = "You are out of the game!"
    }
    text.textContent = message
    
    cardsText.textContent = `Cards: ${firstNum} ${secondNum}`
    
    sumText.textContent = `Sum: ${sum}`
}

startBtn.addEventListener("click", startGame)
console.log(sum)