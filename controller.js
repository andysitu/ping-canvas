controller = (function(){
	var moveValue = 0,
	width = canvas.width,
	height = canvas.height;

	var values = {
		x: 0,
		y: 0,
		speed: 20,
		boardWidth: 60,
		boardHeight: 15,
		width: canvas.width,
		height: canvas.height,
		xBall: 20,
		yBall: 20,
		vx: 5,
		vy: 2,
		radius: 15,
		fullPI: 2* Math.PI
	};

	values["yPoint"] = values.height - values.boardHeight;
	values["maxX"] = values.width - values.boardWidth;

	function clearBoard(ctx) {
		ctx.clearRect(0, 0, width, height);
	}

	function update(elapsed) {
		board.update(values, elapsed, moveValue);
		moveValue = 0;
		ball.update(values, elapsed);
	}

	function draw(ctx) {
		clearBoard(ctx);
		ball.draw(values, ctx);
		board.draw(values, ctx);
	}

	function movement(value){
		moveValue = value;
	}

	return {
		draw: draw,
		update: update,
		movement: movement
	};
})();