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
			if(obstacle.properties.flying == true){
				console.log("isflying")
				this.context.drawImage(obstacle.properties.img2, obstacle.properties.sx, obstacle.properties.sy, 40,48,
					obstacle.properties.x,obstacle.properties.y,40,48);
					obstacle.properties.sx = obstacle.properties.sx + 40;
					if(obstacle.properties.sx > 9 * 40){
						obstacle.properties.sx = 0;
					}
			}
			else{
				this.context.drawImage(obstacle.properties.img1, obstacle.properties.sx, obstacle.properties.sy, 45,45,
					obstacle.properties.x,obstacle.properties.y,45,45);
					obstacle.properties.sx = obstacle.properties.sx + 45;
					if(obstacle.properties.sx > 9 * 45 ){
						obstacle.properties.sx = 0;
					}
			}
		});


		let playerPosition = this.world.player.getPosition(); //variabele voor functie die in player zit
		this.context.fillStyle = this.world.player.properties.color;
		this.context.drawImage(this.world.player.properties.img, this.world.player.properties.sx, this.world.player.properties.sy, 40,this.world.player.properties.height, playerPosition.x,playerPosition.y,40,this.world.player.properties.height); // player zit in world

		this.world.player.properties.sx = this.world.player.properties.sx+40;
		if (this.world.player.properties.sx > 7 * 40){
			this.world.player.properties.sx = 0;
		}
		this.context.fillStyle = "#2040c0";
		this.context.font = "20px NiseSegaSonic";
		this.context.fillText(Math.round(this.world.progress.getCurrentTime()),this.canvas.width - 75, 75);

		if(this.world.player.properties.jumping !== true || this.world.player.properties.ducking !== true){
			console.log("staand");
			this.world.player.properties.sy = 30;
		}

		if (this.world.player.properties.jumping == true || this.world.player.properties.ducking == true){
			console.log("juuuuumping")
			this.world.player.properties.sy = 0;
		}

		if (this.world.player.isDead == false){
			window.requestAnimationFrame(() => {
				this.draw();
			});
		} else {
			this.context.font = "150px NiseSegaSonic";
			this.context.fillStyle = "#2040c0";
			this.context.textAlign = "center";
			this.context.fillText("GAME OVER!",this.canvas.width/2,this.canvas.height/2);
			this.context.font = "50px NiseSegaSonic";
			this.context.fillText("press space to restart ",this.canvas.width/2,(this.canvas.height+150) /2);

		}
	}
}

const stageHand = new StageHand();