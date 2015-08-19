hit = (function() {

	function hitBoard(x, width, top, ballX, ballY, radius) { // decides where the ball hit the board
		var xEnd = x + width;

		if (ballY > top) {
			if (ballX > x && ballX < xEnd) {
				if (ballY < top + radius) {
					console.log("top");
				} else {
					console.log("side")
				}
			}
		} else {
		}
	}

	return {
		hitBoard: hitBoard
	}

})();