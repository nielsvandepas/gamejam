import Player from './player.es6';
import Floor from './floor.es6';

export default class World {
	constructor() {
		this.player = new Player();
		this.floor = new Floor();
	}
}