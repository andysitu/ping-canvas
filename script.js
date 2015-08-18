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
		speed = 5,
		boardWidth = 40,
		boardHeight = 15,
		width = canvas.width,
		height = canvas.height;

	function draw(ctx) {
		var yPoint = height - boardHeight;
		ctx.clearRect(0, 0, width, height);
		ctx.beginPath();
		ctx.fillRect(x, yPoint, boardWidth, boardHeight);
	}

	function update(elapsed, moveValue) {
		x += moveValue * (elapsed / 1000) * speed * boardWidth;
	}

	return {
		draw: draw,
		update: update
	}

})();

controller = (function(){
	var moveValue = 0;

	function update(elapsed) {
		board.update(elapsed, moveValue);
		moveValue = 0;
	}

	function draw(ctx) {
		board.draw(ctx);
	}

	function movement(value){
		if (typeof value === 'number') {
			moveValue += value;
		}
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