var board,
	canvas,
	controller,
	surface,
	key;

canvas = document.getElementById("canvas");
surface = canvas.getContext('2d');

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

function loopIt() {
	var frameID = 0,
		lastFrame = Date.now(),
		frameLength = 33;

	function loop() {
		var thisFrame = Date.now(),
			elapsed = thisFrame - lastFrame;

		if (elapsed >= frameLength) {

			controller.update(elapsed);
			controller.draw(surface);

			lastFrame = thisFrame;
		}

		frameID = window.requestAnimationFrame(loop);
	}

	loop();
}

key = (function(target){
	target.addEventListener("keydown", function(e){
		if (e.keyCode === 37) {
			controller.movement(-1);
		} else if (e.keyCode === 39) {
			controller.movement(1);
		}
	} );
})(document);

loopIt();