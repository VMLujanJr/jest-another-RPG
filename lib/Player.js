const Potion = require('../lib/Potion.js');

function Player (name = '') {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95); // random range; 95 HP - 104 HP
    this.strength = Math.floor(Math.random() * 5 + 7); // random range; 7 STR - 11 STR
    this.agility = Math.floor(Math.random() * 5 + 7); // random range; 7 AGI - 11 AGI

    this.inventory = [new Potion('health'), new Potion()];
};



module.exports = Player;