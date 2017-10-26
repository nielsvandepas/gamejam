export default class Obstacle {
    constructor(speed, fly) {
        this.properties = {
            width: 40, // Math.round(Math.random()*10),
            height: 40, //Math.round(Math.random()*10),
            color: "#000000",
            speed: speed,
            x: 0,
            y: 0,
            flying: fly,
            img1: new Image(),
            img2: new Image(),
            sx: 0,
            sy: 0
		}
        this.properties.img1.src="crab.png";
        this.properties.img2.src="wasp.png";
        this.properties.x = window.innerWidth - this.properties.width;
        this.properties.y = window.innerHeight - this.properties.height - (fly ? 35 : 0);
    }

    collided(collider, physics) {
		physics.removeCollider(this);
	}

	move() {
		this.properties.x -= this.properties.speed;
	}
}