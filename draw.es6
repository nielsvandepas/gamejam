export default class Draw{
    constructor(Movement, canvas) {
        this.Movement = Movement;
        this.canvas = canvas;
		this.context = this.canvas.getContext("2d");
    }

    Draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.fillRect(this.Movement.getLocation().x, this.Movement.getLocation().y,10,10);
    }
}