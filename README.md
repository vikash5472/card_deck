# Card-Deck
Here is few basic functionality for a card game like shuffle, draw etc

# Installation
```js
  npm install card_deck --save
```

# Usage
 ```js
    const Deck = require('card_deck');
    let deck =  new Deck();
 ```
## Shuffle
 ```js
    var newDeck =  deck.shuffle(); // It will return an array of 52 cards (shuffled)
 ```
            

## Draw(count)
  ```js
    var draw = deck.draw(5); // It will return 5 random card from the existing deck.
  ```
            

## Add Deck
 ```js
    var newDeck = deck.add(3); // It will return 52 * 3 shuffled cards.
 ```
            
## Left Cards
 ```js
    var leftOutCards = deck.left(); // Get left out cards after draw
 ```
