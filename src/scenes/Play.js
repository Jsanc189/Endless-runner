class Play extends Phaser.Scene{
    constructor() {
        super('playScene');
    }


    create() {
        //play music for background
        this.bgmusic = this.sound.add('bg_music', {
            mute: false,
            volume: 1,
            rate: 1,
            loop: true
        });
        this.bgmusic.play();

        //add the background
        this.sky = this.add.tileSprite(0,0, 700, 500, 'background').setOrigin(0,0);

        //add the sprite to the world using the 0th frame of the sprite sheet
        this.player = this.physics.add.sprite(gameWidth / 2, gameHeight /10, 'character', 0).setScale(1);
        
        //set the player to not be able to go out of bounds
        this.player.body.setCollideWorldBounds(true);


        
    }
}