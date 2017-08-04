'use strict';
const _ = require('underscore');

function Deck() {
	this.deck = [
		'As',
		'Ks',
		'Qs',
		'Js',
		'Ts',
		'9s',
		'8s',
		'7s',
		'6s',
		'5s',
		'4s',
		'3s',
		'2s',
		'Ah',
		'Kh',
		'Qh',
		'Jh',
		'Th',
		'9h',
		'8h',
		'7h',
		'6h',
		'5h',
		'4h',
		'3h',
		'2h',
		'Ad',
		'Kd',
		'Qd',
		'Jd',
		'Td',
		'9d',
		'8d',
		'7d',
		'6d',
		'5d',
		'4d',
		'3d',
		'2d',
		'Ac',
		'Kc',
		'Qc',
		'Jc',
		'Tc',
		'9c',
		'8c',
		'7c',
		'6c',
		'5c',
		'4c',
		'3c',
		'2c'
	];
	this.shuffledDeck = this.deck;
};

// Shuffle Deck
Deck.prototype.shuffle = function() {
	let tempDeck = _.shuffle(this.deck);
	this.shuffledDeck = tempDeck;
	return tempDeck;
};

// Draw or Get some card out of the deck
Deck.prototype.draw = function(count) {
	if (count == 0) {
		return [];
	} else if (count && count != 1) {
		let randDeck = [];
		for (let i = 0; i < count; i++) {
			let index = _.random(0, this.shuffledDeck.length - 1);
			let card = this.shuffledDeck[index];
			this.shuffledDeck.splice(index, 1);
			randDeck.push(card);
		}
		return randDeck;
	} else {
		let index = _.random(0, this.shuffledDeck.length - 1);
		let card = this.shuffledDeck[index];
		this.shuffledDeck.splice(index, 1);
		return [card];
	}
};

// Add new deck to the 
Deck.prototype.add = function(count) {
	let finalDeck = _.shuffle(this.deck);
	this.shuffledDeck = finalDeck;
	// for 1 deck
	if (count == 0 || count == 1) {
		return finalDeck;
	} else {
		// for many deck
		for (let i = 0; i < count - 1; i++) {
			let tempDeck = _.shuffle(this.deck);
			finalDeck = finalDeck.concat(tempDeck);
		}
		finalDeck = _.shuffle(finalDeck)
		this.shuffledDeck = finalDeck;
		return this.shuffledDeck;
	}
};

// Get the left out cards after each draw
Deck.prototype.left = function() {
	return this.shuffledDeck;
};

module.exports = Deck;