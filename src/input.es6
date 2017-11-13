export default class Input{
    constructor(player){
        this.player = player;
		this.enabled = true;

    	window.addEventListener('keydown', (e) => {
			if (!this.enabled)
				return;

			if ((e.keyCode == 38 || e.keyCode == 32) && !this.player.properties.jumping) {// spatie of pijltoets omhoog & je kan niet springen als je aan het springen was
				this.player.properties.jumping = true;
				console.log("jump");
				this.player.move(7);
			}
			else if (e.keyCode == 40)
				this.player.duck();
		});

		window.addEventListener('keyup', (e) => {
			if (e.keyCode == 40)
				this.player.rise();
		});
	}

	enable(){
		this.enabled = true;
	}

	disable(){ //gebeurt in player.die()
		this.enabled = false;
	}
}