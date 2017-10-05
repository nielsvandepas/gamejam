import Gravity from './gravity.es6';

export default class Player {
	constructor() {
		this.properties = {
			x: 0,
			y: 0,
			width: 10,
			height: 10,
			color: '#000000',
			gravity: new Gravity(this, 1), //constructor van gravity.es6 bestand
			speed: {
				x: 0,
				y: 0
			}
		}
	}

	updatePosition() { //functie die positie update
		this.properties.gravity.gravitate(); //voert de gravity functie uit, van gravity.es6

		this.properties.x += this.properties.speed.x;
		this.properties.y += this.properties.speed.y;
	}

	getPosition() {
		this.updatePosition(); //update positie in het verkrijgen van de positie (wordt weer gebruikt in stagehand)

		return {
			x: this.properties.x,
			y: this.properties.y
		}
	}

	move(x, y) {
		this.properties.speed.x += x;
		this.properties.speed.y += y;
    }

    die() {
    }

	collided(collider) {
        if(typeof collider === "obstacle"){ // als speler collide met een obstacle
            this.properties.speed.y = 0;
            this.die();
        }

        if (typeof collider === "floor"){ // als speler collide met floor
            this.properties.speed.y = 0;
        }
	}
}