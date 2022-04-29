// Package Dependencies...
const inquirer = require('inquirer');
const Player = require('./Player.js');
const Enemy = require('./Enemy.js');

// Game Logic
function Game () {
    // add properties
    this.roundNumber = 0;
    this.isPlayerTurn = false;
    this.enemies = [];
    this.currentEnemy;
    this.player;
};

Game.prototype.initializeGame = function () {
    this.enemies.push(new Enemy('goblin', 'sword'));
    this.enemies.push(new Enemy('dragon', 'fists'));
    this.enemies.push(new Enemy('panda', 'kung-fu'));

    this.currentEnemy = this.enemies[0];

    inquirer
        .prompt([
            {
                type: 'text',
                name: 'name',
                message: 'What is your name?'
            }
        ])
        .then(({name}) => {
            this.player = new Player(name);

            // test object creation
            console.log(this.startNewBattle);
        });
};

// Module Export
module.exports = Game;