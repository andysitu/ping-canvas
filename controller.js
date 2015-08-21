controller = (function(){
	var moveValue = 0,
	width = canvas.width,
	height = canvas.height;

	var v = {
		x: 0,
		speed: 20,
		boardWidth: 60,
		boardHeight: 15,
		width: canvas.width,
		height: canvas.height,
		xBall: 20,
		yBall: 20,
		vx: 5,
		vy: 2,
		radius: 10,
		fullPI: 2* Math.PI
	};

	v["yPoint"] = v.height - v.boardHeight;
	v["maxX"] = v.width - v.boardWidth;

	function clearBoard(ctx) {
		ctx.clearRect(0, 0, width, height);
	}

	function update(elapsed) {
		board.update(v, elapsed, moveValue);
		moveValue = 0;
		ball.update(v, elapsed);
	}

	function draw(ctx) {
		clearBoard(ctx);
		ball.draw(v, ctx);
		board.draw(v, ctx);
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