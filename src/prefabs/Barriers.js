class Barriers extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, velocity, gameHeight) {
        super(scene, x, y, texture);

        this.parentScene = scene;

        this.parentScene.add.existing(this);
        this.parentScene.physics.add.existing(this);
        this.setVelocityY(velocity);
        this.setImmovable(true);
        this.height = gameHeight;
        this.childBarrier = true;
    }

    update() {
        //add new barriers
        if(this.childBarrier && this.y < gameHeight/6 * 2) {
            this.parentScene.addBarrier(this.parentScene, this.setVelocityY);
            this.childBarrier = false
        }
        if(this.y < -this.height) {
            this.destroy();
        }
    }

    reset() {
        this.x = Phaser.Math.Between(50, 450);
        this.y = this.gameHeight;
    }
}