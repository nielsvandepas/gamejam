import Obstacle from './obstacle.es6';

export default class EnemySpawner {
	constructor(obstacles, physics, progress) {
		this.obstacles = obstacles;
		this.physics = physics;
		this.progress = progress;

		this.difficulty = 10;

		progress.registerCallback((time) => { this.spawnEnemy(time); });
	}

	spawnEnemy(time) {
		if (time % 10 === 0)
			this.difficulty++;

		if (time % 2 === 1)
			return;

		let newObstacle = new Obstacle(this.difficulty);
		this.physics.registerCollider(newObstacle);

		this.obstacles.push(newObstacle);
	}
}