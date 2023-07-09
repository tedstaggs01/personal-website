//
// Countdown
//

'use strict';

var Countdown = (function() {

	//
	// Variables
	//

	var $countdown = $('.countdown');

	//
	// Functions
	//

	function init($this) {
		var date = $this.data('countdown-date'),
			template = '<div class="countdown-item"><span class="countdown-digit">%-D</span><span class="countdown-label countdown-days">day%!D</span></div>' +
			'<div class="countdown-item"><span class="countdown-digit">%H</span><span class="countdown-separator">:</span><span class="countdown-label">hrs</span></div>' +
			'<div class="countdown-item"><span class="countdown-digit">%M</span><span class="countdown-separator">:</span><span class="countdown-label">min</span></div>' +
			'<div class="countdown-item"><span class="countdown-digit">%S</span><span class="countdown-label">sec</span></div>';

		$this.countdown(date).on('update.countdown', function(event) {
			var $this = $(this).html(event.strftime('' + template));
		});
	}

	//
	// Events
	//

	if ($countdown.length) {
		$countdown.each(function() {
			init($(this));
		})
	}

})();
