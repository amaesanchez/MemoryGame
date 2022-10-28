"use strict";

/** Memory game: find matching pairs of cards and flip both of them. */
const cards = document.querySelectorAll(".card-container")
const FOUND_MATCH_WAIT_MSECS = 1000;
const COLORS = [
  "firebrick",
  "pink",
  "DarkOliveGreen",
  "orange",
  "cadetblue",
  "firebrick",
  "pink",
  "DarkOliveGreen",
  "orange",
  "cadetblue",
];

const colors = shuffle(COLORS);
console.log(colors);

createCards(colors);

/** Shuffle array items in-place and return shuffled array. */

function shuffle(items) {
  // This algorithm does a "perfect shuffle", where there won't be any
  // statistical bias in the shuffle (many naive attempts to shuffle end up not
  // be a fair shuffle). This is called the Fisher-Yates shuffle algorithm; if
  // you're interested, you can learn about it, but it's not important.

  for (let i = items.length - 1; i > 0; i--) {
    // generate a random index between 0 and i
    let j = Math.floor(Math.random() * i);
    // swap item at i <-> item at j
    [items[i], items[j]] = [items[j], items[i]];
  }

  return items;
}

/** Create card for every color in colors (each will appear twice)
 *
 * Each div DOM element will have:
 * - a class with the value of the color
 * - a click event listener for each card to handleCardClick
 */

function createCards(colors) {
  const gameBoard = document.getElementById("game");

  for (let color of colors) {
    let card = document.createElement("img");
    card.classList.add("card-container");
    card.style.backgroundColor = color;
    gameBoard.append(card);
  }
  console.log(gameBoard);
}

/** Flip a card face-up. */
/** on card click, flipCard (toggle bg color to random from COLORS) */

function flipCard(card) {
  // ... you need to write this ...
  // if two cards are already flipped, cant flip another card, & setTimer
}

/** Flip a card face-down. */

function unFlipCard(card) {
  // ... you need to write this ...
  // if only 1 card is up in deck, let unflip (toggle back to white)
}

/** Handle clicking on a card: this could be first-card or second-card. */

function handleCardClick(evt) {
  // ... you need to write this ...
}

cards.forEach(card => {
  card.addEventListener("click", (evt) => {
    handleCardClick(evt);
  })
})
