board = (function() {
	var	x = 0,
		y = 0,
		speed = 20,
		boardWidth = 40,
		boardHeight = 15,
		width = canvas.width,
		height = canvas.height,
		yPoint = height - boardHeight,
		maxX = width - boardWidth;

	function draw(ctx) {
		ctx.fillRect(x, yPoint, boardWidth, boardHeight);
	}

	function update(elapsed, moveDir) { // 1 for right, -1 for left
		x += moveDir * speed;
		if (x < 0) {
			x = 0;
		} else if (x > maxX) {
			x = maxX;
		}
	}

	return {
		draw: draw,
		update: update
	}

})();