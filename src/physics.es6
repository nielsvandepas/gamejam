export default class Physics {
	constructor() {
		this.colliders = [];
	}

	registerCollider(collider) {
		this.colliders.push(collider);
	}

	checkCollisions() {
		let checkCache = this.colliders; // kopie van de array this.colliders

		checkCache.forEach((collider) => { //je gaat door alle colliders heen
			let collidingObject = checkCache.find((element) => { //variabele krijgt het element waarmee is collided (als ie is collided)
				if (collider === element) // als ie met zichzelf botst
					return false; // dan stopt ie 

				let left = collider.properties.x + collider.properties.width >= element.properties.x; // checken of collide ...
				let right = collider.properties.x <= element.properties.x + element.properties.width;
				let top = collider.properties.y + collider.properties.height >= element.properties.y;
				let bottom = collider.properties.y <= element.properties.y + element.properties.height;

				return (left && right) && (top && bottom);
			});

			if (collidingObject !== undefined) { //als het collided object niet niks is
				collider.collided(collidingObject); 
				collidingObject.collided(collider);

				checkCache.pop(collidingObject); // pop haalt iets uit je array
			}

			checkCache.pop(collider);
		});
	}
}