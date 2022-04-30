/* function Character () {} */

class Character {
    constructor(name = '') {
        this.name = name;
        this.health = Math.floor(Math.random() * 10 + 95);
        this.strength = Math.floor(Math.random() * 5 + 7);
        this.agility = Math.floor(Math.random() * 5 + 7);
    }
// check if character is alive
/* Character.prototype.isAlive = function () {
    if (this.health === 0) {
        return false;
    }
    else {
        return true;
    }
}; replaced by code below...*/
    isAlive() {
        if (this.health === 0) {
            return false;
        }
        else {
            return true;
        }
    }

// returns the character's health value
/* Character.prototype.getHealth = function () {
    return `${this.name}'s health is now ${this.health}!`
}; replaced by code below....*/

    getHealth() {
        return `${this.name}'s health is now ${this.health}!`
    }

// reduce character health
/* Character.prototype.reduceHealth = function (health) {
    this.health -= health;

    if (this.health < 0) {
        this.health = 0;
    }
}; replaced by code below ...*/

    reduceHealth(health) {
        this.health -= health;

        if (this.health < 0) {
            this.health = 0;
        }
    }

/* Character.prototype.getAttackValue = function (strength) { // strength is 10
    // expect character attack value to be less than or equal to 15,
    // expect character attack value to be greater than or equal to 5.
    // do not fully understand concept
    const min = this.strength - 5; // should return 5
    const max = this.strength + 5; // should return 15

    // 1. multiply the parenthesis
    // 2. multiply Math.random() by the result; remember that random() gives a number 0-1, but never 1.
    // 3. add the result by the min value 
    return Math.floor(Math.random() * (max - min) + min); // 10 + 5 = 15???
}; replaced by code below */

    getAttackValue() {
        const min = this.strength - 5; // should return 5
        const max = this.strength + 5; // should return 15

        return Math.floor(Math.random() * (max - min) + min); // 10 + 5 = 15???
    }
}

console.log(new Character().getHealth());

module.exports = Character;