ball = (function() {


	function draw(obj, ctx){
		ctx.save();
		ctx.fillStyle = 'red';
		ctx.beginPath();
		ctx.arc(obj.xBall, obj.yBall, obj.radius, 0, obj.fullPI, true);
		ctx.fill();
		ctx.restore();
	}

	function update(obj, elapsed) {
		obj.xBall += obj.vx;
		obj.yBall += obj.vy;

		if (obj.yBall + obj.vy > obj.height || obj.yBall + obj.vy < 0) {
          obj.vy = -obj.vy;
        } else if (obj.xBall + obj.vx > obj.width || obj.xBall + obj.vx < 0) {
          obj.vx = - obj.vx;
		}
	}

	return {
		update: update,
		draw: draw
	};
})();