var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

function checkForMatch() {

        if (cardsInPlay[0] === cardsInPlay[1]) {
                console.log("You found a match!");
            } else {
                console.log('Sorry, try again.');
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
    console.log("User flipped " + cards[cardId]);
    cardsInPlay.push(cards[cardId]);
     
    var len = cardsInPlay.length;
		if (len === 2) {
			checkForMatch ();
		} else {
			console.log("Pick Another Card!")
		} 
}
flipCard (0);
flipCard (2);




 

	




