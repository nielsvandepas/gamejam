export default class Input{
    constructor(player){
        this.player = player;

    window.addEventListener("keydown", (e) => {
        console.log ('keydown');

        if (e.keyCode == 38){// spatie of pijltoets omhoog
            this.player.move(5);
            console.log("omhoog");
        }
        });
    }
}