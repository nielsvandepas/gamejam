export default class Input{
    constructor(user){
        this.user = user;

    window.addEventListener("keydown", (e) => {
        console.log ('keydown');

        if (e.keyCode == 38 | e.keyCode == 32)
            this.user.move('up');
        if (e.keyCode == 40)
            this.user.move('down');

        let position = this.user.getPosition();

        this.socket.sendPosition(position.x, position.y); //functie die gestart wordt(method), met de parameters x en y
                                                         // kan niet bij de gewone x en y, die staan in de getLocation daar moet je ze vandaan halen
    
        });
    }
}