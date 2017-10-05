export default class Input{
    constructor(player){
        this.player = player;

    	window.addEventListener("keydown", (e) => {
			if (e.keyCode == 38 && !this.player.properties.jumping ){// spatie of pijltoets omhoog
				this.player.properties.jumping = true;
				this.player.move(5);
			}
        });
    }
}