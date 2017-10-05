import Dot from "./dot.es6";
import Vis from "./fish.es6";

var botje = {
    x: 0,
    y: 0,
    background: new Image()
}

botje.background.src = "./botje2.png";

var achtergrond = {
    background: new Image()
}
achtergrond.background.src = "./bd1.png";


class Controller {
    constructor() {
        this.dots = [];
        this.vissen = [];

        this.canvas = document.querySelector("#myCanvas");
        this.context = this.canvas.getContext("2d");
       
        this.mousePos = {
            x: 0,
            y: 0
        };
            // => is korte manier van anonieme functie 
        window.addEventListener("mousemove", e => {
            this.mousePos.x = e.clientX;
            this.mousePos.y = e.clientY;
            botje.y = e.clientY;
            botje.x = e.clientX;
        });

        this.loop();
    }

    loop() {
        var counter = Math.random() * 10;

        if (counter <= 3)
        this.vissen.push(new Vis(0,this.y));

        this.dots.push(new Dot(this.mousePos.x, this.mousePos.y));

        this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.context.drawImage (achtergrond.background, 0,0,1200,600);
        this.context.drawImage(botje.background,botje.x,botje.y,25,32);
        
        this.vissen.forEach(vis =>{
            vis.move();
            vis.draw(this.context);
        });
        
        this.dots.forEach(dot => {
            dot.move();
            dot.draw(this.context);
        });
    
        window.requestAnimationFrame(() => {
            this.loop();
        });
    };
    
}

var c = new Controller();