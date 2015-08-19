hit = (function() {

	function hitBoard(x, width, top, ballX, ballY, radius) { // decides where the ball hit the board
		var xEnd = x + width;

		if (ballY > top) {
			if (ballX > x && ballX < xEnd) {
				if (ballY < top + radius) {
					return true;
				} else {
					return true;
				}
			}
		} else {
			return false;
		}
	}

	return {
		hitBoard: hitBoard
	}

})();