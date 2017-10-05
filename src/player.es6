import Gravity from './gravity.es6';

export default class Player {
	constructor() {
		this.properties = {
			x: 40,
			y: 100,
			width: 10,
			height: 10,
			color: '#000000',
			jumping: false,
			gravity: new Gravity(this, 0.2), //constructor van gravity.es6 bestand
			speed: {
				x: 0,
				y: 0
			}
		}
	}

	updatePosition() { //functie die positie update
		this.properties.gravity.gravitate(); //voert de gravity functie uit, van gravity.es6
		this.properties.y += this.properties.speed.y;
		if (this.properties.y > window.innerHeight - this.properties.height){
			this.properties.speed.y = 0;

			this.properties.y = window.innerHeight - this.properties.height;

			this.properties.jumping = false; //springen om true te maken, gevallen zijn voor false 
		}

	}

	getPosition() {
		this.updatePosition(); //update positie in het verkrijgen van de positie (wordt weer gebruikt in stagehand)

		return {
			x: this.properties.x,
			y: this.properties.y
		}
	}

	move(y) {
		this.properties.speed.y -= y;
    }

    die() {
    }

	collided(collider) {
        if(collider.constructor.name === "Obstacle"){ // als speler collide met een obstacle
            this.properties.speed.y = 0;
            this.die();
        }

        if (collider.constructor.name === "Floor"){ // als speler collide met floor
			this.properties.speed.y = 0;
			console.log("has collided")
        }
	}
}