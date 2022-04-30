const Potion = require('../lib/Potion.js');
const Character = require('./Character.js');

/* function Player (name = '') {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95); // random range; 95 HP - 104 HP
    this.strength = Math.floor(Math.random() * 5 + 7); // random range; 7 STR - 11 STR
    this.agility = Math.floor(Math.random() * 5 + 7); // random range; 7 AGI - 11 AGI

    this.inventory = [new Potion('health'), new Potion()];
}; replaced by code below...*/

class Player extends Character {
    constructor (name = '') {
        // call parent Character
        super(name);
    
        this.inventory = [new Potion('health'), new Potion()];
    }



// inherit prototype methods from Character here: you must establish the inheritance before assigning any other methods to prototype. Otherwise, those methods will get overwritten.
/* Player.prototype = Object.create(Character.prototype); deleted...*/

// returns an object with various player properties
/* Player.prototype.getStats = function () {
    return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
    };
}; replaced by code below....*/

    getStats() {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        };
    }

// returns the inventory array or false if empty
/* Player.prototype.getInventory = function () {
    if (this.inventory.length) {
        return this.inventory;
    }
    else {
        return false;
    }
}; replaced by code below....*/

    getInventory() {
        if (this.inventory.length) {
            return this.inventory;
        }
        else {
            return false;
        }
    }

// returns the player's health value
/* Player.prototype.getHealth = function () {
    return `${this.name}'s health is now ${this.health}!`
}; */

// check if player is alive
/* Player.prototype.isAlive = function () {
    if (this.health === 0) {
        return false;
    }
    else {
        return true;
    }
}; */

// reduce player health
/* Player.prototype.reduceHealth = function (health) {
    this.health -= health;

    if (this.health < 0) {
        this.health = 0;
    }
}; */

/* Player.prototype.getAttackValue = function (strength) { // strength is 10
    // expect player attack value to be less than or equal to 15,
    // expect player attack value to be greater than or equal to 5.
    // do not fully understand concept
    const min = this.strength - 5; // should return 5
    const max = this.strength + 5; // should return 15

    // 1. multiply the parenthesis
    // 2. multiply Math.random() by the result; remember that random() gives a number 0-1, but never 1.
    // 3. add the result by the min value 
    return Math.floor(Math.random() * (max - min) + min); // 10 + 5 = 15???
}; */

/* Player.prototype.addPotion = function (potion) {
    this.inventory.push(potion);
}; replaced by code below....*/

    addPotion(potion) {
        this.inventory.push(potion);
    }

/* Player.prototype.usePotion = function (index) {
    const potion = this.getInventory().splice(index, 1)[0];

    switch (potion.name) {
        case 'agility':
            this.agility += potion.value;
            break;
        case 'strength':
            this.strength += potion.value;
            break;
        case 'health':
            this.strength += potion.value;
            break;
    }
}; replaced by code below ...*/
    usePotion(index) {
        const potion = this.getInventory().splice(index, 1)[0];

        switch (potion.name) {
            case 'agility':
                this.agility += potion.value;
                break;
            case 'strength':
                this.strength += potion.value;
                break;
            case 'health':
                this.strength += potion.value;
                break;
        }
    }
}

module.exports = Player;