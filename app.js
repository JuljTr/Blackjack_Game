console.log("hello world")

let cardsText = document.querySelector("#cards-text");
let sumText = document.querySelector("#cards-sum");
let text = document.querySelector("#text");
let startBtn = document.querySelector("#start-btn");
let newCardBtn = document.querySelector("#card-btn");

let firstNum = randomNum();
let secondNum = randomNum();
let sum = firstNum + secondNum;
let message = "";
let isAlive = false;
let gameOver = false;

function startGame(){
    if (sum < 21) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        isAlive= true;
    } else if (sum > 21) {
        message = "You are out of the game!";
        gameOver = true;
    }


    text.textContent = message;
    cardsText.textContent = `Cards: ${firstNum} ${secondNum}`;
    sumText.textContent = `Sum: ${sum}`;
}

function randomNum(){
    return Math.floor(Math.random() * 12) + 1;
}

function newCard(){
    let card = randomNum()
    sum += card

    cardsText.textContent += " "+ card;
    sumText.textContent = `Sum: ${sum}`;
    console.log(sum)
}

startBtn.addEventListener("click", startGame);
newCardBtn.addEventListener("click", newCard);
console.log(isAlive)