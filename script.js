Object.assign(window, {
	t: 0.0,
	dt: 0.005,

	dimRate: 10,
	strokeColor: 'lightgreen',

	setup: () => {
	  frameRate(30);

	  createCanvas(windowWidth, windowHeight);
		ellipseMode(CENTER);

	  $.reset();
	},

	draw: () => {
		$.transform();
	  $.dim();

		stroke(strokeColor);
		const radius = 2.0 * Math.sin( 2.0 * Math.PI * t );
		ellipse(0.0, 0.0, radius, radius);

		t = (t + dt) % 1.0;
	},

	windowResized: () => {
	  resizeCanvas(windowWidth, windowHeight);
	  $.reset();
	},

	$: {
		dim: () => {
			background(0, dimRate);
		},

		random: (limit) => {
			return Math.random() * limit;
		},

		reset: () => {
			translate(windowWidth/2, windowHeight/2);
			rotate(radians(-90));
			scale(0.9 * Math.min(windowWidth/2, windowHeight/2));

			background(0);

			noFill();
			strokeWeight(0.0025);

			t = 0.0;
		},

		transform: () => {
			translate(windowWidth/2, windowHeight/2);
			rotate(radians(-90));
			scale(0.9 * Math.min(windowWidth/2, windowHeight/2));
		}
	}
});