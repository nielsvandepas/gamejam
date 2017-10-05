export default class Input{
    constructor(player){
        this.player = player;

    window.addEventListener("keydown", (e) => {
        console.log ('keydown');

        if (e.keyCode == 38 || e.keyCode == 32) // spatie of pijltoets omhoog
            this.player.move(5,0);
        if (e.keyCode == 40)
            this.player.move(0,5);

        let position = this.player.getPosition();

    
        });
    }
}