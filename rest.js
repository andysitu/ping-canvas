function loopIt() {
	var frameID = 0,
		lastFrame = Date.now(),
		frameLength = 33;

	function loop() {
		_tester.start();
		var thisFrame = Date.now(),
			elapsed = thisFrame - lastFrame;

		controller.update(elapsed);
		controller.draw(surface);

		lastFrame = thisFrame;

		_tester.end();

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