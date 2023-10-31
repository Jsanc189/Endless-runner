class Items extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, velocity, gameHeight) {
        super(scene, x, y, texture);

        this.parentScene = scene;

        //add object to the scene
        this.parentScene.add.existing(this);
        this.parentScene.physics.add.existing(this);
        this.setVelocityY(velocity);
        this.setImmovable(true);
        
    }

    update() {
        if(this.y < -this.height) {
            this.reset();
        }
    }

    reset() {
        this.x = Phaser.Math.Between(50, 450);
        this.y = gameHeight;
    }
}