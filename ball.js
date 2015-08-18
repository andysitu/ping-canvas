ball = (function() {

	var x = 20,
		y = 20,
		vx = 5,
		vy = 2,
		width = canvas.width,
		height = canvas.height,
		radius = 15,
		fullPI = 2* Math.PI;

	function draw(ctx){
		ctx.save();
		ctx.fillStyle = 'red';
		ctx.beginPath();
		ctx.arc(x, y, radius, 0, fullPI, true);
		ctx.fill();
		ctx.restore();
	}

	function update(elapsed) {
		x += vx;
		y += vy;

		if (y + vy > height || y + vy < 0) {
          vy = -vy;
        } else if (x + vx > width || x + vx < 0) {
          vx = - vx;
		}
	}

	return {
		update: update,
		draw: draw
	};
})();