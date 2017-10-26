import World from './world.es6';

export default class StageHand {
	constructor() {
		this.world = new World();
		this.canvas = document.querySelector('#stage');
		this.context = this.canvas.getContext('2d');

		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;

		this.draw();
	}

	draw() {
		this.world.update();

		this.context.clearRect(0,0,this.canvas.width,this.canvas.height);

		this.world.obstacles.forEach((obstacle) => {
			this.context.fillStyle = obstacle.properties.color;
			this.context.fillRect(obstacle.properties.x,obstacle.properties.y,obstacle.properties.width,obstacle.properties.height); // player zit in world
		});

		let playerPosition = this.world.player.getPosition(); //variabele voor functie die in player zit
		this.context.fillStyle = this.world.player.properties.color;
		this.context.drawImage(this.world.player.properties.img, this.world.player.properties.sx, this.world.player.properties.sy, 40,40, playerPosition.x,playerPosition.y,40,40); // player zit in world
		
		this.world.player.properties.sx = this.world.player.properties.sx+40;
		if (this.world.player.properties.sx > 7 * 40){
			this.world.player.properties.sx = 0;
		}
		this.context.font = "20px Comic Sans MS";
		this.context.fillText(this.world.progress.getCurrentTime(),this.canvas.width - 75, 75);
		
		if(this.world.player.properties.jumping !== true || this.world.player.properties.isDucking !== true){
			this.world.player.properties.sy = 0;
		}

	

		if (this.world.player.jumping == true){
			this.world.player.properties.sy = 40;
		}

		if (this.world.player.isDead == false){
			window.requestAnimationFrame(() => {
				this.draw();
			});
		} else {
			this.context.font = "20px Comic Sans MS";
			this.context.textAlign = "center";
			this.context.fillText("GAME OVER!",this.canvas.width/2,this.canvas.height/2);
		}
	}
}

const stageHand = new StageHand();