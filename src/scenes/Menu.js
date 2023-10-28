class Menu extends Phaser.Scene{
    constructor() {
        super("menuScene");
    }

    preload() {
        
    }

    create() {
        let menuConfig = {
            fontFamily: "courier",
            fontSize: '40px',
            backgroundColor: '#0975B4',
            color:'#000000',
            align: 'center',
            padding:{
                top:5,
                bottom: 5
            },
            fixedWidth: 500
        }

        this.title_message = this.add.text(game.config.width/2, game.config.height/2 - borderUISize, 
        'Falling with style', menuConfig).setOrigin(0.5);
    }

    update() {

        this.scene.start('playScene');
    }



}