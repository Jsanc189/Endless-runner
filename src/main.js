// Name:Jackie Sanchez
// Endless Runner
//Date: 10/25/23

// music: Background music via https://www.FesliyanStudios.com 
//  "A Bit of Hope" by David Fesliyan


//const { Phaser } = require("../lib/phaser");


let config = {
    type: Phaser.AUTO,
    width: 700,
    height: 500,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    scene: [Load, Menu, Play]
}

let keyLEFT, keyRIGHT, keySPACE;

let game  = new Phaser.Game(config);

//set User Interface sizes

let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

let centerX = game.config.width /2;
let centerY = game.config.height /2;

let gameWidth = game.config.width;
let gameHeight = game.config.height;