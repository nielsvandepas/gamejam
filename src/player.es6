import Gravity from './gravity.es6';
import Input from './input.es6';

export default class Player {
	constructor() {
		this.properties = {
			x: 100,
			y: window.innerHeight,
			sx: 0,
			sy: 0,
			width: 40,
			height: 40,
			color: '#000000',
			jumping: false,
			ducking: false,
			img: new Image(),
			gravity: new Gravity(this, 0.2), //constructor van gravity.es6 bestand
			speed: {
				x: 0,
				y: 0
			}
			
		}
		this.isDead = false;
		this.properties.img.src = "sonic2.png";
		this.input = new Input(this);
	}

	updatePosition() { //functie die positie update
		this.properties.gravity.gravitate(); //voert de gravity functie uit, van gravity.es6
		this.properties.y += this.properties.speed.y;
		
		if (this.properties.jumping == false && this.properties.ducking == false){
			this.properties.height = 40;
		}
		else{
			this.properties.height = 30; //beter afsnijden (hij wordt kleiner bij jumping of ducking)
		}

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
		if (this.properties.ducking)
			return;
		this.properties.ducking = true;
		this.properties.height = 30;
	}

	rise() {
		
		this.properties.ducking = false;
		this.properties.height = 40;
	}

    die() {
		 this.properties.speed.y = 0;
		 this.properties.y = this.properties.y;
		 this.input.disable(); //input wordt disabled
		 this.isDead = true; // flag voor dat ie dood is zodat ik er bij draw in kan
		
		 window.addEventListener("keydown", (e)=>{
			if (e.keyCode == 32){
				location.reload();
			}
		 });
    }

	collided(collider, physics) {
		console.log('collided');

        if(collider.constructor.name === "Obstacle") { // als speler collide met een obstacle
            this.properties.speed.y = 0;
            this.die();
        }
	}
}