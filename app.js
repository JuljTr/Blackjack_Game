console.log("hello world")

let cardsText = document.querySelector("#cards-text");
let sumText = document.querySelector("#cards-sum");
let text = document.querySelector("#text");
let startBtn = document.querySelector("#start-btn");
let newCardBtn = document.querySelector("#card-btn");

let cards = [];
let sum = 0;
let message = "";
let isAlive = true;
let hasBlackjack = false;

function randomNum() {
    return Math.floor(Math.random() * 13) + 1;
}

function startGame() {
    let firstNum = randomNum();
    let secondNum = randomNum();
    cards = [firstNum, secondNum]
    sum = firstNum + secondNum;
    renderGame()
}

function renderGame() {
    cardsText.textContent = `Cards: `;
    for (let i = 0; i < cards.length; i++) {
        cardsText.textContent += cards[i] + " "
    }

    if (sum < 21) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackjack = true;
    } else  {
        message = "You are out of the game!";
        isAlive = false;
        console.log("over")
    }

    text.textContent = message;
    sumText.textContent = `Sum: ${sum}`;
}

function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        let newCard = randomNum()
        cards.push(newCard)
        sum += newCard

        cardsText.textContent += " " + newCard;
        sumText.textContent = `Sum: ${sum}`;
        renderGame()
    }
}

startBtn.addEventListener("click", startGame);
newCardBtn.addEventListener("click", newCard);
