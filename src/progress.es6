export default class Progress {
    constructor() {
		this.totalSeconds = 0;
		this.callbacks = [];

		setTimeout(() => {this.incrementTime();}, 1000);
	}

	registerCallback(callback) {
		this.callbacks.push(callback);
	}

	incrementTime() {
		this.totalSeconds++;

		console.log(this.callbacks);
		this.callbacks.forEach((callback) => { callback(this.totalSeconds); });

		setTimeout(() => {this.incrementTime();}, 1000);
	}

	getCurrentTime() {
		return this.totalSeconds;
	}
}