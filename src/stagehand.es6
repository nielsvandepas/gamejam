import World from './world.es6';

export default class StageHand {
	constructor() {
		this.world = new World();
		this.canvas = document.querySelector('#stage');
		this.context = this.canvas.getContext('2d');

		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;

		this.draw();
	}

	draw() {
		this.world.update();

		this.context.clearRect(0,0,this.canvas.width,this.canvas.height);

		this.world.obstacles.forEach((obstacle) => {
			this.context.fillStyle = obstacle.properties.color;
			this.context.fillRect(obstacle.properties.x,obstacle.properties.y,obstacle.properties.width,obstacle.properties.height); // player zit in world
		});

		let playerPosition = this.world.player.getPosition(); //variabele voor functie die in player zit
		this.context.fillStyle = this.world.player.properties.color;
		this.context.fillRect(playerPosition.x,playerPosition.y,this.world.player.properties.width,this.world.player.properties.height); // player zit in world

		window.requestAnimationFrame(() => {
			this.draw();
		});
	}
}

const stageHand = new StageHand();