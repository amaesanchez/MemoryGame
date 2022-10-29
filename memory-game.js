"use strict";

/** Memory game: find matching pairs of cards and flip both of them. */
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
createCards(colors);

const deck = document.querySelectorAll(".card-container");
console.log(deck);

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
    let card = document.createElement("div");

    card.classList.add("card-container", color);

    gameBoard.append(card);

    card.addEventListener("click", (evt) => {
      handleCardClick(evt);
    });
  }
}

/** Flip a card face-up. */
/** on card click, flipCard (toggle bg color to random from COLORS) */

function flipCard(card) {
  // ... you need to write this ...
  // if two cards are already flipped, cant flip another card, & setTimer
  card.style.backgroundColor = card.classList[1];
}

/** Flip a card face-down. */
function unFlipCard(card) {
  // ... you need to write this ...
  card.style.backgroundColor = "white";
}

/** Handle clicking on a card: this could be first-card or second-card. */
function handleCardClick(evt) {
  // ... you need to write this ...
  let card = evt.target;

  if (card.style.backgroundColor === "white" || !card.style.backgroundColor) {
    flipCard(card);
  }

  const gameBoard = document.getElementById("game");
  // if 2 cards have matching bgColor
  // clearTimeout()
  console.log(card.parentElement.children)
  setTimeout(unFlipCard, 2000, card);

}
