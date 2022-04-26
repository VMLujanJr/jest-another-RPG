const Player = require('../lib/Player.js');

// mock test
const Potion = require('../lib/Potion.js');
jest.mock('../lib/Potion.js');
console.log(new Potion());

// mocking fs could look like this...
/*
const fs = require('fs');
jest.mock('fs');
fs.readFileSync.mockReturnValue('fake content');
*/

test('creates a player object', () => {
    
    const player = new Player('Victor');

    // get Stats
    expect(player.name).toBe('Victor');
    expect(player.name.length).toBeGreaterThan(0);
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));

    // get Inventory
   /*  expect(player.inventory).toEqual(expect.arrayContaining([expect.any(Object)])); */ // Write it like this...
   // ...or like this
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );
});