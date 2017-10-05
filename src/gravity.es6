export default class Gravity {
	constructor(object,speed) {
        this.speed = speed;
        this.object = object;
    }
    
    gravitate(){
        this.object.move(0,this.object.speed.y - speed); //hij beweegt sowieso naar beneden (als je in de lucht zit, beweeg je sowieso naar beneden)
    }

   
}