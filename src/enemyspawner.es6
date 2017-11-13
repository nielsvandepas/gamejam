import Obstacle from './obstacle.es6';

export default class EnemySpawner {
	constructor(obstacles, physics, progress) {
		this.obstacles = obstacles;
		this.physics = physics;
		this.progress = progress;

		progress.registerCallback((time) => { this.spawnEnemy(time); }); //gebruik method uit progress.es6 om spawnEnemy() te starten
	}

	spawnEnemy(time) {
		//als time oneven aantal is, en als je verderop in de difficulty komt (1/groter aantal, zal steeds sneller groter zijn dan math random)
		if ((time % 2 === 1) || (Math.random() < 1 / this.progress.difficulty)) 
			return; // geen nieuwe enemy

		//new Obstacle (speed, moet hij vliegen of staan)
		let newObstacle = new Obstacle(this.progress.difficulty, this.progress.difficulty >= 3 && Math.random() > 0.5);
		this.physics.registerCollider(newObstacle);

		this.obstacles.push(newObstacle); //obstacle in array pushen
	}
}