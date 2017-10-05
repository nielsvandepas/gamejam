import Obstacle from './obstacle.es6';

export default class EnemySpawner {
	constructor(obstacles, physics, progress) {
		this.obstacles = obstacles;
		this.physics = physics;
		this.progress = progress;

		this.difficulty = 1;

		progress.registerCallback(this.spawnEnemy);
	}

	spawnEnemy(time) {
		if (time % 10 === 0)
			this.difficulty++;

		let newObstacle = new Obstacle(this.difficulty);
		physics.registerCollider(newObstacle);

		this.obstacles.push(newObstacle);
	}
}