class Ending extends Phaser.Scene{
    constructor() {
        super('endingScene')
        this.endingScore = 0;
    }

    create() {
        this.add.tileSprite(0,0, 500, 700, 'background').setOrigin(0,0);
        
        let endingConfig = {
            fontFamily: "courier",
            fontSize: '20px',
            backgroundColor: '#0975B4',
            color: '#000000',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5
            },
            fixedWidth: 450
        }
            this.game_over_message = this.add.text(gameWidth / 2, gameHeight / 2, 
            'Game Over!  Style Points: ' + playScore.toString() + '\nMost Stylish: ' + localStorage.getItem("FallingWithStyleHighScore").toString(),
            endingConfig). setOrigin(0.5);


            this.restart_message = this.add.text(gameWidth /2, gameHeight / 3 * 2, 
            'Press R to Retry or M for Menu', endingConfig).setOrigin(0.5);
        
            //define left and right keys
            keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
            keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(keyR)) {
            this.sound.play('click_2');
            this.scene.start('playScene');
        }
        else if(Phaser.Input.Keyboard.JustDown(keyM)) {
            this.sound.play('click');
            this.scene.start('menuScene');
        }
    }
}