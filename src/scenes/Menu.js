class Menu extends Phaser.Scene{
    constructor() {
        super("menuScene");
    }

    preload() {
        
    }

    create() {
        let titleConfig = {
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

        let startConfig = {
            fontFamily: "courier",
            fontSize: '30px',
            backgroundColor: '#0975B4',
            color: '#000000',
            align: 'center',
            padding:{
                top:5,
                bottom:5
            },
            fixedWidth: 500
        }

        this.title_message = this.add.text(game.config.width/2, game.config.height/2 - borderUISize, 
        'Falling with style', titleConfig).setOrigin(0.5);
        this.start_game = this.add.text(game.config.width/2, game.config.height/2 + borderUISize,
        'Press Spacebar to start!', startConfig).setOrigin(0.5);

        //define keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.sound.play('selection');
            this.scene.start('playScene');
        }
        //this.scene.start('playScene');
    }
    



}