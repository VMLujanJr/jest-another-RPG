const Potion = require('../lib/Potion.js');
const Character = require('./Character.js');

/* function Enemy(name, weapon) {
    this.name = name;
    this.weapon = weapon;
    this.potion = new Potion();

    this.health = Math.floor(Math.random() * 10 + 85);
    this.strength = Math.floor(Math.random() * 5 + 5);
    this.agility = Math.floor(Math.random() * 5 + 5);
}; changed to code below...*/

class Enemy extends Character {
    constructor(name, weapon) {
        // call Character constructor parent
        super(name);

        this.weapon = weapon;
        this.potion = new Potion();
    
    }


// inherit prototype methods from Character here: you must establish the inheritance before assigning any other methods to prototype. Otherwise, those methods will get overwritten.
/* Enemy.prototype = Object.create(Character.prototype); this section was deleted...*/

// returns the Enemy's health value
/* Enemy.prototype.getHealth = function () {
    return `${this.name}'s health is now ${this.health}!`
}; */

/* Enemy.prototype.getAttackValue = function (strength) { // strength is 10
    // expect Enemy attack value to be less than or equal to 15,
    // expect Enemy attack value to be greater than or equal to 5.
    // do not fully understand concept
    const min = this.strength - 5; // should return 5
    const max = this.strength + 5; // should return 15

    // 1. multiply the parenthesis
    // 2. multiply Math.random() by the result; remember that random() gives a number 0-1, but never 1.
    // 3. add the result by the min value 
    return Math.floor(Math.random() * (max - min) + min); // 10 + 5 = 15???
}; */

// reduce Enemy health
/* Enemy.prototype.reduceHealth = function (health) {
    this.health -= health;

    if (this.health < 0) {
        this.health = 0;
    }
}; */

// check if Enemy is alive
/* Enemy.prototype.isAlive = function () {
    if (this.health === 0) {
        return false;
    }
    else {
        return true;
    }
}; */

/* Enemy.prototype.getDescription = function () {
    return `A wild ${this.name} has appeared! Watch out he is holding a ${this.weapon}!`
} this was replaced by code below....*/

    getDescription() {
        return `A wild ${this.name} has appeared! Watch out he is holding a ${this.weapon}!`
    }

}
module.exports = Enemy;