import Gravity from './gravity.es6';
import Input from './input.es6';

export default class Player {
	constructor() {
		this.properties = {
			x: 100,
			y: window.innerHeight,
			sx: 0,
			sy: 0,
			width: 10,
			height: 20,
			color: '#000000',
			jumping: false,
			img: new Image(),
			gravity: new Gravity(this, 0.2), //constructor van gravity.es6 bestand
			speed: {
				x: 0,
				y: 0
			}
			
		}
		this.isDead = false;
		this.properties.img.src = "sonic.png";
		this.input = new Input(this);
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

	duck() {
		if (this.isDucking)
			return;

		this.isDucking = true;
		this.properties.height /= 2;
	}

	rise() {
		this.isDucking = false;
		this.properties.height *= 2;
	}

    die() {
		 this.properties.speed.y = 0;
		 this.properties.y = this.properties.y;
		 this.input.disable(); //input wordt disabled
		 this.isDead = true; // flag voor dat ie dood is zodat ik er bij draw in kan

    }

	collided(collider, physics) {
		console.log('collided');

        if(collider.constructor.name === "Obstacle") { // als speler collide met een obstacle
            this.properties.speed.y = 0;
            this.die();
        }
	}
}