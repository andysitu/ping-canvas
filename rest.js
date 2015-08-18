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