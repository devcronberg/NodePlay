"use strict";

// https://github.com/anseki/readline-sync
// npm install --save readline-sync
var readlineSync = require("readline-sync");

// Wait for user's response.
var userName = readlineSync.question("May I have your name? ", { prompt: true });
console.log("Hi " + userName + "!");

// Handle the secret text (e.g. password).
var favFood = readlineSync.question("What is your favorite food? ", {
  hideEchoBack: true // The typed text on screen is hidden by `*` (default).
});
console.log("Oh, " + userName + " loves " + favFood + "!");

var readlineSync2 = require("readline-sync"),
  animals = ["Lion", "Elephant", "Crocodile", "Giraffe", "Hippo"],
  index = readlineSync2.keyInSelect(animals, "Which animal?");
console.log("Ok, " + animals[index] + " goes to your room.");

var readlineSync3 = require("readline-sync");
if (readlineSync3.keyInYN("Do you want this module?")) {
  // 'Y' key was pressed.
  console.log("Installing now...");
  // Do something...
} else {
  // Another key was pressed.
  console.log("Searching another...");
  // Do something...
}
