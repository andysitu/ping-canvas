var board,
	canvas,
	controller,
	surface;

canvas = document.getElementById("canvas");
surface = canvas.getContext('2d');

board = (function() {
	var	x = 0,
		y = 0,
		speed = 5,
		boardWidth = 40,
		boardHeight = 15,
		width = canvas.width,
		height = canvas.height;

	function draw(ctx) {
		var yPoint = height - boardHeight;
		ctx.beginPath();
		ctx.fillRect(x, yPoint, boardWidth, boardHeight);
	}

	function update(elapsed) {

	}

	return {
		draw: draw,
		update: update
	}

})();

controller = (function(){

	function draw(ctx) {
		board.draw(ctx);
	}

	function update(elapsed) {
		board.update(elapsed);
	}

	return {
		draw: draw,
		update: update
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

loopIt();