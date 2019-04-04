const deck = {
    cards: [],
    reset() {
        const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'],
              suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];
        const resetDeck =[];
        for (let value of values) {
            for (let suit of suits) {
                const card = {};
                card.suit = suit;
                card.value = value;
                resetDeck.push(card);
            }
        }
        this.cards = resetDeck;
        return "Deck has been reset";
    },
    shuffle() {
        let currentCardIndex = this.cards.length;

        while (0 !== currentCardIndex) {
          let randomCardIndex = Math.floor(Math.random() * currentCardIndex);
          currentCardIndex--;
          let cardSwapper = this.cards[currentCardIndex];
          this.cards[currentCardIndex] = this.cards[randomCardIndex];
          this.cards[randomCardIndex] = cardSwapper;
        }
        return "Deck has been shuffled";
    },
    draw() {
        return this.cards.shift();
    }
}
