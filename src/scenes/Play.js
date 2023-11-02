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

        this.gameOver = false;
        this.speedy = true;

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
        this.BARRIER_VELOCITY = 150;

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

        //score text set up
        let scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '30px',
            backgroundColor: '#F3B141',
            color:'#1F1FC7',
            align: 'left',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 200
        }

        playScore = 0;
        this.score = 0;
        this.tracker = 0;


        this.scoreText = this.add.text(100, gameHeight - 15, 
            ' Score: ' + this.score.toString(), scoreConfig).setOrigin(0.5);
        //this.scoreText.visible = false;


        //add glasses to the field
        //this.glasses = new Items(this, Phaser.Math.Between(50, 450), gameHeight, 'sunglasses', -this.OBJECT_VELOCITY, gameHeight);

        //make a group of barriers
        this.barrier_group = this.add.group({
            //makes sure the update loop also runs on new additions to group
            runChildUpdate: true
        })

        //make a group of cool items
        this.item_group = this.add.group({
            runChildUpdate: true
        })

        //wait some time to spawn barriers
        this.time.delayedCall(500, () => {
            this.addBarrier();
            this.addItem();
        })
        
        //add barrier to the field
        //this.barrier = new Barriers(this, Phaser.Math.Between(50, 450), gameHeight, 'stink', -this.BARRIER_VELOCITY, gameHeight);

        //add collision to the glasses item and resets the glasses
        // this.physics.add.collider(this.player, this.glasses, (glasses) =>{
        //     this.glasses.reset();
        //     this.score += 1;
        //     this.scoreText.text = ' Score: ' + this.score.toString();
        // });


               
    }

    addBarrier() {
        let barrier = new Barriers(this, Phaser.Math.Between(50, 450), gameHeight, 'stink', -this.BARRIER_VELOCITY, gameHeight);
        this.barrier_group.add(barrier);
    }


    addItem() {
        let itemList = ['sunglasses', 'shirt', 'hat']
        let item = new Items(this,Phaser.Math.Between(50, 450), gameHeight, itemList[Phaser.Math.Between(0,2)], -this.OBJECT_VELOCITY, gameHeight);
        this.item_group.add(item);
    }

    update() {
        if (!this.gameOver) {
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

            if(this.score % 2 == 0 && this.score != 0  && this.speedy == true){
                this.speedy = false;
                this.speedUp();
                this.tracker = this.score;
            }
            //console.log(this.BARRIER_VELOCITY);

            if(this.tracker != 0 && this.score > this.tracker) {
                this.tracker = 0;
                this.speedy = true;
            }


            this.player.setVelocity(this.PLAYER_VELOCITY * playerVector.x, this.PLAYER_VELOCITY * 0);

            this.player.play('fly' + '-' + playerDirection, true);

            this.physics.world.collide(this.player, this.item_group, () => {
                this.score += 1;
                this.scoreText.text = ' Score: ' + this.score.toString();
            });

            this.physics.world.collide(this.player, this.barrier_group, () => {
                this.gameOver = true;
            });
        }

        else{
            playScore = this.score;
                if(this.score > highScore) {
                    highScore = this.score;
                }
                this.bgmusic.stop();
                this.scene.start('endingScene');
        }


    }

    speedUp() {
        this.OBJECT_VELOCITY += 30;
        this.BARRIER_VELOCITY += 30;
        console.log("Barrier speed" + this.BARRIER_VELOCITY.toString());
        console.log("Object Speed" + this.OBJECT_VELOCITY.toString());   
    }




}