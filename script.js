var board,
	canvas;

canvas = document.getElementById("canvas");

board = function() {
	var ctx = canvas.getContext('2d'),
		x = 0,
		y = 0,
		speed = 5,
		boardWidth = 40,
		boardHeight = 15,
		width = canvas.width,
		height = canvas.height;

	function draw() {
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

};

function loopIt() {
	var frameID = 0,
		lastFrame = Date.now(),
		frameLength = 33;

	function loop() {
		var thisFrame = Date.now(),
			elapsed = thisFrame - lastFrame;

		if (elapsed >= frameLength) {

			console.log(elapsed);
			lastFrame = thisFrame;
		}

		frameID = window.requestAnimationFrame(loop);
	}

	loop();
}

loopIt();