export default class Progress {
    constructor() {
		this.totalSeconds = 0;

		setTimeout(incrementTime, 1000);
	}

	incrementTime() {
		this.totalSeconds++;
		setTimeout(incrementTime, 1000);
	}

	getCurrentTime() {
		return this.totalSeconds;
	}
}