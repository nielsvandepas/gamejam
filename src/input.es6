export default class Input{
    constructor(player){
        this.player = player;

    window.addEventListener("keydown", (e) => {
        console.log ('keydown');

        if (e.keyCode == 38 | e.keyCode == 32) // spatie of pijltoets omhoog
            this.player.move('up');
        if (e.keyCode == 40)
            this.player.move('down');

        let position = this.player.getPosition();

    
        });
    }
}