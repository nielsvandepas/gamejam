import Player from './player.es6';
import Physics from './physics.es6';
import Obstacle from './obstacle.es6';
import Input from './input.es6';
import Progress from './progress.es6';
import EnemySpawner from './enemyspawner.es6';

export default class World {
	constructor() {
		this.player = new Player(); // player implementeren in world
		this.physics = new Physics();
		this.input = new Input(this.player);
		this.progress = new Progress();
		this.obstacles = [];
		this.enemySpawner = new EnemySpawner(this.obstacles, this.physics, this.progress);

		this.physics.registerCollider(this.player);
    }

	update() {
		this.physics.checkCollisions();

		this.obstacles.forEach((obstacle) => {
			obstacle.move();
		});
	}
}