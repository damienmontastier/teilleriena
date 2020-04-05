class Raf {
	constructor() {
		this.callbacks = {};
		this.isRunning = false;
	}

	loop() {
		this.isRunning = true;

		Object.values(this.callbacks)
			.sort((a, b) => {
				return a.index - b.index;
			})
			.forEach((callback) => {
				callback.callback();
			});

		this.rafId = requestAnimationFrame(this.loop.bind(this));
	}

	add(id, callback) {
		this.callbacks[id] = callback;

		if (!this.isRunning) {
			this.loop();
		}
	}

	remove(id) {
		if (!this.callbacks[id]) {
			console.warn(`Raf: ${id} callback doesn't exist`);
		}
		delete this.callbacks[id];

		if (Object.keys(this.callbacks).length === 0) {
			this.isRunning = false;
			cancelAnimationFrame(this.rafId);
		}
	}
}

export default new Raf();
