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
            align: 'center',
            padding:{
                top:5,
                bottom: 5
            },
            fixedWidth: 450
        }


        this.credit = this.add.text(gameWidth / 2, gameHeight/4, 
        'CREDITS:', creditConfig).setOrigin(0.5);


        this.spriteCred = this.add.text(gameWidth /2, gameHeight / 7 * 3, 
        'SPRITE ART:    JACKIE SANCHEZ', smallCreditConfig).setOrigin(0.5);
        

        this.sceneCred = this.add.text(gameWidth / 2, gameHeight / 7 * 3 + 40, 
        'SETTING ART:    JACKIE SANCHEZ', smallCreditConfig).setOrigin(0.5);

        this.musicCred = this.add.text(gameWidth / 2, gameHeight / 7 * 3 + 80,
        'MUSIC:    "A bit of Hope" by David Feliyan', smallCreditConfig).setOrigin(0.5);

        this.levelCred = this.add.text(gameWidth / 2, gameHeight + 40,
        'LEVEL DESIGN:    JACKIE SANCHEZ', smallCreditConfig).setOrigin(0.5);

    }

}