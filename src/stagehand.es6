import World from './world.es6';

export default class StageHand {
	constructor() {
		this.world = new World();
		this.canvas = document.querySelector('#stage');
		this.context = this.canvas.getContext('2d');

		this.draw();
	}

	draw() {
		console.log("draw");
		this.context.clearRect(0,0,this.canvas.width,this.canvas.height);

		let playerPosition = this.world.player.getPosition(); //variabele voor functie die in player zit
		this.context.fillRect(playerPosition.x,playerPosition.y,this.world.player.properties.width,this.world.player.properties.height); // player zit in world

		window.requestAnimationFrame(() => {
			draw();
		});
	}
}

const stageHand = new StageHand();