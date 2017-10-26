export default class Input{
    constructor(player){
        this.player = player;
		this.enabled = true;
    	window.addEventListener("keydown", (e) => {
			if (e.keyCode == 38 && !this.player.properties.jumping && this.enabled == true){// spatie of pijltoets omhoog
				this.player.properties.jumping = true;
				this.player.move(7);
			}
        });
	}
	enable(){
		this.enabled= true;
	}

	disabled(){
		this.enabled = false;
	}
}