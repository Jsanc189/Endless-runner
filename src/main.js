// Name:Jackie Sanchez
// Endless Runner
//Date: 10/25/23

// music: Background music via https://www.FesliyanStudios.com 
//  "A Bit of Hope" by David Fesliyan

// approx hours spent on project: 20 - 25 hours

// technically interesting: implemented a high score to be stored on personal device that it is played on.  
// Style: I am particularly proud of being able to make an array of objects for "style points" that
//  spawned randomly and were either destroyed by the player collecting them, or the items reaching the end
//  of the screen.


//const { Phaser } = require("../lib/phaser");


let config = {
    type: Phaser.AUTO,
    width: 500,
    height: 700,
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
    scene: [Load, Menu, Play, Ending, Credits]
}

let keyLEFT, keyRIGHT, keySPACE, keyUP, keyM, keyR;

let game  = new Phaser.Game(config);

//set User Interface sizes

let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

let centerX = game.config.width /2;
let centerY = game.config.height /2;

let gameWidth = game.config.width;
let gameHeight = game.config.height;

//to allow for cursor (arrow key movment)
let cursors;
let playerDirection = 'down'

//set a global variable to hold player scores
let playScore;
let highScore = 0;
localStorage.setItem("FallingWithStyleHighScore", highScore)