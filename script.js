var board = (function() {
	var canvas = document.getElementById("canvas"),
		ctx = canvas.getContext('2d'),
		x = 0,
		y = 0,
		boardWidth = 20,
		boardHeight = 10,
		width = canvas.width,
		height = canvas.height;

	function makeBoard() {
		var yPoint = height - boardHeight;
		ctx.beginPath();
		ctx.fillRect(x, yPoint, boardWidth, boardHeight);

	}

	makeBoard();

})()