export default class Physics {
	constructor() {
		this.colliders = [];
	}

	registerCollider(collider) {
		this.colliders.push(collider);
	}

	removeCollider(collider) {
		
		this.colliders.pop(collider); //pop haalt collider uit de array, method wordt gestart in obstacle
		
	}

	checkCollisions() {
		this.colliders.forEach((collider) => {
			collider.properties.collisionChecked = false;
		});

		this.colliders.forEach((collider) => {
			collider.properties.collisionChecked = true;

			let collidingObject = this.colliders.find((element) => {
				if (collider === element || element.properties.collisionChecked)
					return false; // als speler met zichzelf collide (wat elke keer gebeurt eig) dan returnt hij false en ook als hij al gecheckt is (kan niet 2 keer botsen)

				let left = collider.properties.x + collider.properties.width >= element.properties.x; // checken of collide ...
				let right = collider.properties.x <= element.properties.x + element.properties.width; // komt een boolean uit (true of false)
				let top = collider.properties.y + collider.properties.height >= element.properties.y;
				let bottom = collider.properties.y <= element.properties.y + element.properties.height;

				// console.log(`left: ${ left }, right: ${ right }, top: ${ top }, bottom: ${ bottom }`);

				return left && right && top && bottom; //dus true, of false komt hieruit, ze moeten allemaal true zijn dan komt er 1 x true uit
			});

			if (collidingObject !== undefined) { 
				collider.collided(collidingObject, this); //collided functie uitvoeren (zie obstacle.es6)
				collidingObject.collided(collider, this);

				collidingObject.properties.collisionChecked = true;
			}
		});
	}
}