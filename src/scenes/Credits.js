class Credits extends Phaser.Scene{
    constructor() {
        super("creditScene");
    }

    preload() {

    }

    create() {
        let creditConfig = {
            fontFamily: "courier",
            fontSize: '40px',
            backgroundColor: '#000000',
            color: '#5FCDE4',
            align:'center',
            padding:{
                top:5,
                bottom: 5
            },
            fixedWidth: 450
        }

        let smallCreditConfig = {
            fontFamily: 'courier',
            fontSize: '25px',
            backgroundColor: '#000000',
            color: '#5FCDE4',
            align: 'left',
            padding:{
                top:5,
                bottom: 5
            },
            fixedWidth: 450
        }

        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        this.credit = this.add.text(gameWidth / 2, gameHeight/4, 
        'CREDITS:', creditConfig).setOrigin(0.5);


        this.spriteCred = this.add.text(gameWidth /2, gameHeight / 7 * 3, 
        'SPRITE ART:\t\t\t\t\tJACKIE SANCHEZ', smallCreditConfig).setOrigin(0.5);
        

        this.sceneCred = this.add.text(gameWidth / 2, gameHeight / 7 * 3 + 40, 
        'SETTING ART:    JACKIE SANCHEZ\nSFX:\t\t\t\t\t\t\t\t\t\t  JACKIE SANCHEZ', smallCreditConfig).setOrigin(0.5);

        this.musicCred = this.add.text(gameWidth / 2, gameHeight / 7 * 3 + 100,
        'MUSIC:    \t\t\t\t\t "A bit of Hope" \nBY:\t\t\t\t\t\t\t\t\t\t\t  DAVID FELIYAN', smallCreditConfig).setOrigin(0.5);

        this.levelCred = this.add.text(gameWidth / 2, gameHeight / 7 * 3 + 160,
        'LEVEL DESIGN:   JACKIE SANCHEZ', smallCreditConfig).setOrigin(0.5);


        this.goToMenu = this.add.text(gameWidth / 2, gameHeight / 7 * 6,
        'Press SPACE to return \nto the main menu',smallCreditConfig).setOrigin(0.5);

    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keySPACE)){
            this.sound.play('selection');
            this.scene.start('menuScene');

        }
    }

}