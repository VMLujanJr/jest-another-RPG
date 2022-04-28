const Potion = require('../lib/Potion.js');

function Player (name = '') {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95); // random range; 95 HP - 104 HP
    this.strength = Math.floor(Math.random() * 5 + 7); // random range; 7 STR - 11 STR
    this.agility = Math.floor(Math.random() * 5 + 7); // random range; 7 AGI - 11 AGI

    this.inventory = [new Potion('health'), new Potion()];
};

// returns an object with various player properties
Player.prototype.getStats = function () {
    return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
    };
};

// returns the inventory array or false if empty
Player.prototype.getInventory = function () {
    if (this.inventory.length) {
        return this.inventory;
    }
    else {
        return false;
    }
};

// returns the player's health value
Player.prototype.getHealth = function () {
    return `${this.name}'s health is now ${this.health}!`
};

// check if player is alive
Player.prototype.isAlive = function () {
    if (this.health === 0) {
        return false;
    }
    else {
        return true;
    }
};

// reduce player health
Player.prototype.reduceHealth = function (health) {
    this.health -= health;

    if (this.health < 0) {
        this.health = 0;
    }
};

module.exports = Player;