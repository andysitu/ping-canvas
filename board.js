board = (function() {

	function draw(obj, ctx) {
		ctx.fillRect(obj.x, obj.yPoint, obj.boardWidth, obj.boardHeight);
	}

	function update(obj, elapsed, moveDir) { // 1 for right, -1 for left
		obj.x += moveDir * obj.speed;
		if (obj.x < 0) {
			obj.x = 0;
		} else if (obj.x > obj.maxX) {
			obj.x = obj.maxX;
		}
	}

	return {
		draw: draw,
		update: update
	}

})();