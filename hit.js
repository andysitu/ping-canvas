hit = (function() {

	function hitBoard(x, width, top, ballX, ballY, radius) { // decides where the ball hit the board
		var xEnd = x + width;

		if (ballY > top - 2 * radius/ 5) {
			if (ballX > x - radius/3 && ballX < xEnd+ radius/3) {
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