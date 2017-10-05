import Player from './player.es6';
import Floor from './floor.es6';

export default class World {
	constructor() {
		this.player = new Player(); // player en floor implementeren in world
		this.floor = new Floor();
	}
}