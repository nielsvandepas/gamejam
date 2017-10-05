import Player from './player.es6';
import Floor from './floor.es6';
import Physics from './physics.es6';
import Obstacle from './obstacle.es6';
import Input from './input.es6';

export default class World {
	constructor() {
		this.player = new Player(); // player en floor implementeren in world
        this.floor = new Floor();
		this.physics = new Physics();
		this.input = new Input(this.player);
		this.registerColliders();
    }

    registerColliders(){ //registreren als collider
        this.physics.registerCollider(this.player);
        // this.physics.registerCollider(this.obstacles);
	}

	update() {
		this.physics.checkCollisions();
	}
}