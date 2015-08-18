_tester = {
	startTime: 0,
	times: 0,
	index: 0,
	start() {
		var that = _tester;

		that.startTime = window.performance.now();
	},

	end() {
		var that = _tester;

		that.times += window.performance.now() - that.startTime;
		that.index++;
	}, 

	result() {
		var that = _tester;

		console.log(that.times / that.index);
		return that.times / that.index;
	}


}