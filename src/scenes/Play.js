class Play extends Phaser.Scene{
    constructor() {
        super('playScene');
    }


    create() {
        //play music for background
        this.bgmusic = this.sound.add('bg_music',{
            mute: false,
            volume: 1,
            rate: 1,
            loop: true
        });
        this.bgmusic.play();
        
    }
}