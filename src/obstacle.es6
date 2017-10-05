export default class Obstacle {
    constructor(speed) {
        this.properties = {
            width: Math.round(Math.random()*10),
            height: Math.round(Math.random()*10),
            color: "#00000",
            speed: speed,
            x: 0,
            y: 0
        }

        this.properties.x = window.innerWidth - this.properties.width;
        this.properties.y = window.innerHeight - this.properties.height;
    }

    collided(collider){

	}

	move() {
		this.properties.x -= this.properties.speed;
	}
}