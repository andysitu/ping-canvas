hit = (function() {

	function hitBoard(x, width, top, ballX, ballY) { // decides where the ball hit the board
		var xEnd = x + width;

		if (ballY > top) {
			if (ballX > x && ballX < xEnd) {
				console.log("HI");
			}
		} else {
		}
	}

	return {
		hitBoard: hitBoard
	}

})();