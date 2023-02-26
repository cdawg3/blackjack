let firstCard = 10;
// let firstCard = Math.floor((Math.random() * 10) + 2);
let secondCard = 4;
// let secondCard = Math.floor((Math.random() * 10) + 2);
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
    renderGame()
}

function renderGame() {
    if (sum <= 20) {
      message = "Do you want to draw a new card?";
      sumEl.textContent = "Sum: " + sum
      cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    } else if (sum === 21) {
      message = "You've got Blackjack!";
      hasBlackJack = true;
    } else {
      message = "You're out of the game!";
      isAlive = false;
    }
    messageEl.textContent = message
    console.log(message);
}

function newCard() {
    console.log("Drawing a new card from the deck!")
    
    let card = 3
    sum += card
    renderGame();
}