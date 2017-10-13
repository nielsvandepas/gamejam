export default class Physics {
	constructor() {
		this.colliders = [];
	}

	registerCollider(collider) {
		this.colliders.push(collider);
	}

	removeCollider(collider) {
		console.log(collider);
		console.log(this.colliders);
		this.colliders.pop(collider);
		console.log(this.colliders);
	}

	checkCollisions() {
		this.colliders.forEach((collider) => {
			collider.properties.collisionChecked = false;
		});

		this.colliders.forEach((collider) => {
			collider.properties.collisionChecked = true;

			let collidingObject = this.colliders.find((element) => {
				if (collider === element || element.properties.collisionChecked)
					return false;

				let left = collider.properties.x + collider.properties.width >= element.properties.x;
				let right = collider.properties.x <= element.properties.x + element.properties.width;
				let top = collider.properties.y + collider.properties.height >= element.properties.y;
				let bottom = collider.properties.y <= element.properties.y + element.properties.height;

				// console.log(`left: ${ left }, right: ${ right }, top: ${ top }, bottom: ${ bottom }`);

				return left && right && top && bottom;
			});

			if (collidingObject !== undefined) {
				collider.collided(collidingObject, this);
				collidingObject.collided(collider, this);

				collidingObject.properties.collisionChecked = true;
			}
		});
	}
}