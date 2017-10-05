import Gravity from './gravity.es6';

export default class Player {
	constructor() {
		this.properties = {
			x: 0,
			y: 0,
			width: 10,
			height: 10,
			color: '#000000',
			gravity: 1,
			speed: {
				x: 0,
				y: 0
			}
		}
	}

	getPosition() {
		return {
			x: this.properties.x,
			y: this.properties.y
		}
	}

	move(x, y) {

	}
}