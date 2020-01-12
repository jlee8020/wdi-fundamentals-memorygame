
const cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards [0];
cards.push("cardsInPlay");
console.log("User flipped queen");

var cardTwo = cards [2];
cards.push("cardsInPlay");
console.log("User flipped King");

 if (cardsInPlay.length === 2) { 
 		if (cardsInPlay[0] === cardsInPlay[1]) 
 			alert("You found a match!"); 
 	} else {
 		alert("Sorry, try again");
  }