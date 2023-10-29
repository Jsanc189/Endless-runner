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
        this.sky = this.add.tileSprite(0,0, 500, 700, 'background').setOrigin(0,0);

        //add the sprite to the world using the 0th frame of the sprite sheet
        this.player = this.physics.add.sprite(gameWidth / 2, gameHeight /10, 'character', 0).setScale(1.5);
        
        //set the player to not be able to go out of bounds
        this.player.body.setCollideWorldBounds(true);
        
        //set size of the player
        this.player.body.setSize(25,62)

        //variable to hold player velocity
        this.PLAYER_VELOCITY = 300;

        //allow for input from arrow keys
        cursors = this.input.keyboard.createCursorKeys();

        //when the player isn't touching anything
        this.anims.create({
            key: 'fly-down',
            frameRate: 0,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('character', {
                start: 0,
                end: 0
            })
        })

        //when the player is touching left key
        this.anims.create({
            key: 'fly-left',
            frameRate: 0,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('character', {
                start: 1,
                end: 1
            })
        })

        //when the player is toughing right key
        this.anims.create({
            key: 'fly-right',
            frameRate: 0,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('character', {
                start: 2,
                end: 2
            })
        })
        
    }


    update() {
        let playerVector = new Phaser.Math.Vector2(0,0);
        this.sky.tilePositionY += 4;

        if(cursors.left.isDown) {
            playerVector.x = -1;
            playerDirection = 'left';
        }
        else if(cursors.right.isDown) {
            playerVector.x = 1;
            playerDirection = 'right';
        }
        else{
            playerVector.x = 0;
            playerDirection = 'down';
        }

        this.player.setVelocity(this.PLAYER_VELOCITY * playerVector.x, this.PLAYER_VELOCITY * 0);

        this.player.play('fly' + '-' + playerDirection, true);
    }
}