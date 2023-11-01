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
            'Game Over!  Score: ' + this.endingScore.toString(), endingConfig). setOrigin(0.5);


            this.restart_message = this.add.text(gameWidth /2, gameHeight / 3 * 2, 
            'Press <- to Retry or -> for Menu', endingConfig).setOrigin(0.5);
        
    }

    update() {
        if(cursors.left.isDown) {
            this.scene.start('playScene');
        }
        else if(cursors.right.isDown) {
            this.scene.start('menuScene');
        }
    }
}