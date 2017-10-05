export default class Gravity {
	constructor(object,strength) {
        this.strength = strength;
        this.object = object;
    }

    gravitate() {
        this.object.move(this.strength); //hij beweegt sowieso naar beneden (als je in de lucht zit, beweeg je sowieso naar beneden)
    }
}