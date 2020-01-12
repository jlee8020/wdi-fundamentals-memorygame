/*var cards = ["queen", "queen", "king", "king"];*/

var cards = [
{
	rank: 'queen',
	suit :'hearts',
	cardImage: "images/queen-of-hearts.png",
},
{	
	rank: 'queen',
	suit : 'diamonds',
	cardImage: "images/queen-of-diamonds.png",
},
{
	rank: 'king',
	suit : 'hearts',
	cardImage: "images/king-of-hearts.png",
},
{
	rank: 'king',
	suit : 'diamonds',
	cardImage: "images/king-of-diamonds.png",
}
];

var cardsInPlay = [];

function checkForMatch() {

        if (cardsInPlay[0] === cardsInPlay[1]) {
               console.log("You found a match!");
               alert("You found a match!");
            } else {
               console.log("Sorry, try again.");
               alert("Sorry, try again.");
			}
}
/*let cardOne = cards [0];
cardsInPlay.push(cards [0]);
console.log('User flipped' + " " + cardOne);

let cardTwo = cards [2];
cardsInPlay.push(cards [2]);
console.log ('User flipped' + " " + cardTwo);
*/

function flipCard(cardId) {
    console.log("User flipped " + cards[cardId].rank);
    cardsInPlay.push(cards[cardId].rank);

    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);

    var len = cardsInPlay.length;
		if (len === 2) {
			checkForMatch ();
		} else {
			console.log("Pick Another Card!")
		} 
}
flipCard (0);
flipCard (2);




 

	




