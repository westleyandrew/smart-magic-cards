const suits = ['hearts', 'spades', 'diamonds', 'clubs'];
const cardsWrapper = document.querySelector('.cards-wrapper');

// For each dataObject, create a new card and append it to the DOM
function drawCards(cards) {
  cards.forEach((card, i) => {
    const positionFromLeft = i * 30;
    const cardElement = document.createElement('div');
    cardElement.setAttribute('data-value', card.value);
    cardElement.classList.add('card', `${card.suit}-${card.value}`);
    cardElement.style.left = `${positionFromLeft}px`;
    cardsWrapper.append(cardElement);
  });
}

function createCards() {
  const cards = [];
  // Create an array with objects containing the value and the suit of each card
  suits.forEach((suit) => {
    for (let i = 1; i <= 13; i += 1) {
      const cardObject = {
        value: i,
        suit,
      };
      cards.push(cardObject);
    }
  });
  drawCards(cards);
}

// Function to clear out the initial button and create new buttons to play the game.
function createButtons() {
  const startButton = document.getElementById('start-game');
  const shuffleButton = document.getElementById('shuffle');
  const showHideButton = document.getElementById('show-hide');
  const magicButton = document.getElementById('magic');
  startButton.style.display = 'none';
  shuffleButton.style.display = 'block';
  showHideButton.style.display = 'block';
  magicButton.style.display = 'block';
}

// Function to start the game by clearing the wrapper, creating
// and appending the buttons and all the cards to the DOM
function startGame() {
  createButtons();
  createCards();
}

function shuffleCards() {
  console.log('shufflecards');
}

function showHideCards() {
  const cardWrapper = document.querySelector('.cards-wrapper');
  cardWrapper.classList.add('hidden');
}

function magicCards() {
  console.log('magiccards');
}

document.getElementById('start-game').addEventListener('click', startGame);
document.getElementById('shuffle').addEventListener('click', shuffleCards);
document.getElementById('show-hide').addEventListener('click', showHideCards);
document.getElementById('magic').addEventListener('click', magicCards);
