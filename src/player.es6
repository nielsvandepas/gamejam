import Gravity from './gravity.es6';

export default class Player {
	constructor() {
		this.properties = {
			x: 0,
			y: 0,
			width: 10,
			height: 10,
			color: '#000000',
			gravity: new Gravity(this, 1),
			speed: {
				x: 0,
				y: 0
			}
		}
	}

	updatePosition() {
		this.properties.gravity.gravitate();

		this.properties.x = this.properties.speed.x;
		this.properties.y = this.properties.speed.y;
	}

	getPosition() {
		updatePosition();

		return {
			x: this.properties.x,
			y: this.properties.y
		}
	}

	move(x, y) {

	}

	collided(collider) {

	}
}