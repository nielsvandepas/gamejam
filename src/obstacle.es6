export default class Obstacle {
    constructor(speed) {
        this.properties = {
            width: 10, // Math.round(Math.random()*10),
            height: 10, //Math.round(Math.random()*10),
            color: "#000000",
            speed: speed,
            x: 0,
            y: 0
        }

        this.properties.x = window.innerWidth - this.properties.width;
        this.properties.y = window.innerHeight - this.properties.height;
    }

    collided(collider, physics) {
		physics.removeCollider(this);
	}

	move() {
		this.properties.x -= this.properties.speed;
	}
}