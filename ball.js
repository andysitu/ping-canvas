ball = (function() {

	var x = 20,
		y = 20,
		radius = 15,
		fullPI = 2* Math.PI;

	function draw(ctx){
		ctx.save();
		ctx.fillStyle = 'red';
		ctx.beginPath();
		ctx.arc(x, y, radius, 0, fullPI, true);
		ctx.fill();
		ctx.restore();
	}

	return {
		draw: draw
	};
})()