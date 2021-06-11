function Card1(suit, rank) {
    this.suit = suit;
    this.rank = rank;
}
let card1 = Card1;

Card1.prototype.show = function() {
    console.log(this.suit + this.rank);
}

class Card2 {
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }

    show() {
        console.log(this.suit + this.rank);
    }
}

function Person(name) {
    Object.defineProperty(this, "name", {
        get: function() {
            return name;
        },
        set: function(newName) {
            this.name = newName;
        },
        enumerable: true,
        configurable: true,        
    });
};