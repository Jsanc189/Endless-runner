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
        this.start_cred = this.add.text(gameWidth / 2, game.config.height / 2 + (2 * borderUISize),
        'Press "UP" key for Credits', startConfig).setOrigin(0.5);

        //define keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyUP =    this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.sound.play('selection');
            this.scene.start('playScene');
        }

        if(Phaser.Input.Keyboard.JustDown(keyUP)) {
            this.sound.play('selection');
            this.scene.start('creditScene');
        }
        //this.scene.start('playScene');
    }
    



}