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
  card.classList.add("flipped");
}

/** Flip a card face-down. */
function unFlipCard(card) {
  // ... you need to write this ...
  card.style.backgroundColor = null;
  card.classList.remove("flipped");
  lock = false;
}

/** Handle clicking on a card: this could be first-card or second-card. */
let matched = [];
let flipped = [];
// flag so that you cant populate flipped until AFTER timeout is done
let lock = false;

function handleCardClick(evt) {
  // ... you need to write this ...
  let card = evt.target;

  // flip card and store in an array
  if (!lock) {
    if (card.classList[2] !== "flipped" && flipped.length <= 1) {
      flipCard(card);
      flipped.push(card);
    }
  }

  if (flipped.length === 2) {
    lock = true;
    for (let flippedCard of flipped) {
      let cardTimer = setTimeout(unFlipCard, 1000, flippedCard);
      // if backgroundColor of both items are same, clear timeout for both
      if (
        flipped[0].style.backgroundColor === flipped[1].style.backgroundColor
      ) {
        clearTimeout(cardTimer);
        matched.push(flipped);
        lock = false;
      }
    }
    // reset flipped array
    flipped = [];
  }
  console.log(matched.length, deck.length);
  if (matched.length === deck.length) {
    alert("YOU WIN!");
  }
}
