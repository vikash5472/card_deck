# Card-Deck
Here is few basic functionality for a card game like shuffle, draw etc

# Installation
Clone it and store it in node_modules.

# Usage
const Deck = require('card-deck');
let deck =  new Deck();

 // It will return an array of 52 cards (shuffled)
 
            var newDeck =  deck.shuffle();
            

 // It will return % random card from the shuffled deck.
 
            var draw = deck.draw(5);
            

//Add multiple deck

            var newDeck = deck.add(3); // It will return 52 * 3 shuffled cards.
            
// Get left out cards after each draw

            var leftOutCards = deck.left();
