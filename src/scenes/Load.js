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


        //music
        this.load.audio('bg_music', './assets/A_Bit_Of_Hope.mp3');
    }

    create() {
        this.scene.start('menuScene');
    }
}