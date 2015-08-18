controller = (function(){
	var moveValue = 0,
	width = canvas.width,
	height = canvas.height;

	function clearBoard(ctx) {
		ctx.clearRect(0, 0, width, height);
	}

	function update(elapsed) {
		board.update(elapsed, moveValue);
		moveValue = 0;
	}

	function draw(ctx) {
		clearBoard(ctx);
		board.draw(ctx);
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