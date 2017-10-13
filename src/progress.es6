export default class Progress {
    constructor() {
		this.totalSeconds = 0;
		this.callbacks = [];

		this.timeOut= setTimeout(() => {this.incrementTime();}, 100);
	}

	registerCallback(callback) {
		this.callbacks.push(callback);
	}

	incrementTime() {
		this.totalSeconds++;

		this.callbacks.forEach((callback) => { callback(this.totalSeconds); });

		this.timeOut = setTimeout(() => {this.incrementTime();}, 100);
	}

	getCurrentTime() {
		return this.totalSeconds;
	}
}