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

    
        });
    }
}