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
    this.enemies.push(new Enemy('dragon', 'battle axe'));
    this.enemies.push(new Enemy('panda', 'spear'));

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

            this.startNewBattle();
        });
};

Game.prototype.startNewBattle = function () {
    if (this.player.agility > this.currentEnemy.agility) {
        this.isPlayerTurn = true;
    }
    else {
        this.isPlayerTurn = false;
    }
    console.log('Your stats are as follows:');
    console.table(this.player.getStats());
    console.table(this.currentEnemy.getDescription());

    this.battle();
};

Game.prototype.battle = function () {
    if (this.isPlayerTurn) {
        inquirer
            .prompt(
                {
                    type: 'list',
                    message: 'What would you like to do?',
                    name: 'action',
                    choices: ['Attack', 'Use a potion']
                }
            )
            .then(({action}) => {
                if (action === 'Use a potion') {
                    if (!this.player.getInventory()) {
                        console.log('You don\'t have any potions!');
                        // after a player see's their empty inventory
                        return this.checkEndOfBattle();
                    }
                    
                    inquirer
                        .prompt(
                            {
                                type: 'list',
                                message: 'Which potion would you like to use?',
                                name: 'action',
                                choices: this.player.getInventory().map((item, index) => `${index + 1}: ${item.name}`)
                            }
                        )
                        .then(({action}) => {
                            const potionDetails = action.split(': ');

                            this.player.usePotion(potionDetails[0] - 1);
                            console.log(`You used a ${potionDetails[1]} potion.`);
                            
                            // after a player uses a potion
                            this.checkEndOfBattle();
                        })
                }
                else {
                    const damage = this.player.getAttackValue();
                    this.currentEnemy.reduceHealth(damage);

                    console.log(`You attacked the ${this.currentEnemy.name}`);
                    console.log(this.currentEnemy.getHealth());

                    // after player attacks enemy
                    this.checkEndOfBattle();
                }
            });
    }
    else {
        const damage = this.currentEnemy.getAttackValue();
        this.player.reduceHealth(damage);

        console.log(`You were attacked by the ${this.currentEnemy.name}`);
        console.log(this.player.getHealth());

        // after enemy attacks player
        this.checkEndOfBattle();
    }
    // if player turn
        //prompt user to attack or use a potion
        //if use potion
            //display list of potion objects to user
            //apply selected potion effect to player
        //if attack
            //subtract health from the enemy based on player attack value
    // if enemy turn
        // subtract health from player based on enemy attack value
};

Game.prototype.checkEndOfBattle = function () {
    if (this.player.isAlive() && this.currentEnemy.isAlive()) {
        this.isPlayerTurn = !this.isPlayerTurn;
        this.battle();
    }
    else if (this.player.isAlive() && !this.currentEnemy.isAlive()) {
        console.log(`You've defeated the ${this.currentEnemy.name}`);

        this.player.addPotion(this.currentEnemy.potion);
        console.log(`${this.player.name} found a ${this.currentEnemy.potion.name} potion!`);

        this.roundNumber++;

        if (this.roundNumber < this.enemies.length) {
            this.currentEnemy = this.enemies[this.roundNumber];
            this.startNewBattle();
        }
        else {
            console.log('You win!');
        }
    }
    else {
        console.log('You\'ve been defeated!');
    }
};

// Module Export
module.exports = Game;