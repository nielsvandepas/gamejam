export default class Physics {
	constructor() {
		this.colliders = [];
	}

	registerCollider(collider) {
		this.colliders.push(collider);
	}

	checkCollisions() {
		let checkCache = this.colliders;

		checkCache.forEach((collider) => {
			let collidingObject = checkCache.find((element) => {
				if (collider === element)
					return false;

				let left = collider.properties.x + collider.properties.width >= element.properties.x;

				let right = collider.properties.x <= element.properties.x + collider.properties.width;
				let top = collider.properties.y + collider.properties.height >= element.properties.y;
				let bottom = collider.properties.y <= element.properties.y + collider.properties.height;

				return (left && right) || (top && bottom);
			});

			if (collidingObject !== undefined) {
				collider.collided(collidingObject);
				collidingObject.collided(collider);

				checkCache.pop(collidingObject);
			}

			checkCache.pop(collider);
		});
	}
}