export default class Input{
    constructor(player){
        this.player = player;

    	window.addEventListener('keydown', (e) => {
			if ((e.keyCode == 38 || e.keyCode == 32) && !this.player.properties.jumping) {// spatie of pijltoets omhoog
				this.player.properties.jumping = true;
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
}