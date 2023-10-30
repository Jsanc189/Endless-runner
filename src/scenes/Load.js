class Load extends Phaser.Scene{
    constructor(){
        super('loadScene');
    }

    preload() {
        //make a loading bar
        let loadingBar = this.add.graphics();
        this.load.on('progress', (value) =>{
            //reset the loading fill in bar
            loadingBar.clear(); 

            //color set to alpha                 
            loadingBar.fillStyle(0xFFFFFF, 1); 

            //set the x, y, width and height of the bar
            loadingBar.fillRect(0, centerY, gameWidth * value, 5); 
        });


        //when the loading bar is complete
        this.load.on('complete', ()=>{
            //destroy the loading bar
            loadingBar.destroy();
        });


        //load assets here
        //graphics
        //background
        this.load.image('background', './assets/blue_sky.png');
        
        //score items (style points)
        this.load.image('sunglasses', './assets/sunglasses.png');
        this.load.image('shirt', './assets/shirt.png');
        this.load.image('hat', './assets/hat.png');

        //barriers
        this.load.image('stink', './assets/stink.png');

        //character
        this.load.spritesheet('character', './assets/stick-figure-Sheet.png',{
            frameWidth: 32,
            frameHeight: 64,
        });

        //music
        this.load.audio('bg_music', './assets/A_Bit_Of_Hope.mp3');
    }

    create() {
        this.scene.start('menuScene');
    }
}