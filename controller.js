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
		height: canvas.height
	};

	values["yPoint"] = values.height - values.boardHeight;
	values["maxX"] = values.width - values.boardWidth;

	function clearBoard(ctx) {
		ctx.clearRect(0, 0, width, height);
	}

	function update(elapsed) {
		board.update(values, elapsed, moveValue);
		moveValue = 0;
		ball.update(elapsed);
	}

	function draw(ctx) {
		clearBoard(ctx);
		ball.draw(ctx);
		board.draw(values, ctx);
	}

	function movement(value){
		moveValue = value;
	}

	console.log(values);

	return {
		draw: draw,
		update: update,
		movement: movement
	};
})();