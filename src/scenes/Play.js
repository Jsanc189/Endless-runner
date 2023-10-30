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

        //set the player to immovable
        this.player.body.setImmovable(true);
        
        //set size of the player
        this.player.body.setSize(25,62)

        //variable to hold player velocity
        this.PLAYER_VELOCITY = 300;

        //variable to hold object velocities
        this.OBJECT_VELOCITY = 100;

        //variable to hold barrier velocities
        this.BARRIER_VELOCITY = 1;

        //allow for input from arrow keys
        cursors = this.input.keyboard.createCursorKeys();

        //when the player isn't touching anything animation
        this.anims.create({
            key: 'fly-down',
            frameRate: 0,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('character', {
                start: 0,
                end: 0
            })
        })

        //when the player is touching left key animation
        this.anims.create({
            key: 'fly-left',
            frameRate: 0,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('character', {
                start: 1,
                end: 1
            })
        })

        //when the player is touching right key animation
        this.anims.create({
            key: 'fly-right',
            frameRate: 0,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('character', {
                start: 2,
                end: 2
            })
        })

        //add glasses to the field
        this.addItem('sunglasses');
        this.addItem('shirt');
        this.addItem('hat');

        //add barrier to the field
        this.addBarrier('stink');

        
        
        
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


    addItem(itemName) {
        //get a random x coordinate to spawn the item
        let xSpawn = Phaser.Math.Between(50,450)

        //spawn item at the bottom of the screen
        this.coolItem = this.physics.add.sprite(xSpawn, gameHeight+ 5, itemName).setScale(1);
       
        //set the hit box to custom size
        this.coolItem.body.setSize(26, 10);
  
        //sett the velocity of the object
        this.coolItem.setVelocityY(-this.OBJECT_VELOCITY);
        
        //set the items to be immovable
        this.coolItem.body.setImmovable(true);



    }

    addBarrier(barrierName) {
        //get a random x coordinate to spawn the item
        let xSpawn = Phaser.Math.Between(90, 410);

        //spawn barrier at the bottom of the screen
        this.barrier = this.physics.add.sprite(xSpawn, gameHeight, barrierName).setScale(.75);

        //set the hit box to custom size
        this.barrier.body.setSize(90, 25);
        //set velocity of the barrier
        this.barrier.setVelocityY(-this.BARRIER_VELOCITY);

        //set the barriers to be immovable
        this.barrier.body.setImmovable(true);
    }

    

    
}