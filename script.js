var board,
	canvas;

canvas = document.getElementById("canvas")

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
		darw: draw,
		update: update;
	}

});

function init() {

}