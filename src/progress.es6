export default class Progress {
    constructor() {
		this.totalSeconds = 0;
		this.callbacks = [];

		this.timeout = setTimeout(() => { this.incrementTime(); }, 500);

		this.score = 0;
		this.scorePhase = 0;

		this.startDifficulty = 3;
		this.difficulty = this.startDifficulty;
	}

	registerCallback(callback) {
		this.callbacks.push(callback);
	}

	incrementTime() {
		this.totalSeconds++;

		this.callbacks.forEach((callback) => { callback(this.totalSeconds); }); //wordt gebruikt voor enemyspawner

		this.timeout = setTimeout(() => { this.incrementTime(); }, 500); 

		this.incrementScore();
	}

	incrementScore() {
		this.score += this.difficulty - this.startDifficulty + 1;
		this.scorePhase += this.difficulty - this.startDifficulty + 1;

		if (this.scorePhase >= 100) {
			this.difficulty++;
			this.scorePhase = 0;
		}
	}

	getCurrentTime() {
		return this.totalSeconds / 2; //elke seconde (anders is het elke halve seconde)
	}
}
