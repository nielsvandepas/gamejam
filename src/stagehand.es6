import World from 'world.es6';

export default class StageHand {
	constructor() {
		this.world = new World();

		this.canvas = document.querySelector('#stage');
		this.context = this.canvas.getContext('2d');
	}

	draw() {

	}
}