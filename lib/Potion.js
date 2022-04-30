/* function Potion(name) {
    this.types = ['strength', 'agility', 'health'];
    this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

    if (this.name === 'health') {
        this.value = Math.floor(Math.random() * 11 + 30);
    }
    else {
        this.value = Math.floor(Math.random() * 6 + 7);
    }
} */

// ES6... the top function was re-written, essentially the same thing...
class Potion {
    constructor(name) {
        this.types = ['strength', 'agility', 'health'];
        this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

        if (this.name === 'health') {
            this.value = Math.floor(Math.random() * 11 + 30);
        }
        else {
            this.value = Math.floor(Math.random() * 6 + 7);
        }
    }
}

module.exports = Potion;