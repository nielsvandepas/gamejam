import Obstacle from './obstacle.es6';

export default class EnemySpawner {
	constructor(obstacles, physics, progress) {
		this.obstacles = obstacles;
		this.physics = physics;
		this.progress = progress;

		progress.registerCallback((time) => { this.spawnEnemy(time); });
	}

	spawnEnemy(time) {
		if ((time % 2 === 1) || (Math.random() < 1 / this.progress.difficulty))
			return;

		let newObstacle = new Obstacle(this.progress.difficulty, this.progress.difficulty >= 3 && Math.random() > 0.5);
		this.physics.registerCollider(newObstacle);

		this.obstacles.push(newObstacle);
	}
}