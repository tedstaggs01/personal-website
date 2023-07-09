//
// Popover
//

'use strict';

var Popover = (function() {

	// Variables

	var $popover = $('[data-toggle="popover"]');


	// Methods

	function init($this) {
		var popoverClass = '';

		if ($this.data('color')) {
			popoverClass = ' popover-' + $this.data('color');
		}

		var options = {
			trigger: 'focus',
			template:
			'<div class="popover' + popoverClass + '" role="tooltip">'+
				'<div class="arrow"></div>'+
				'<h3 class="popover-header"></h3>' +
				'<div class="popover-body"></div>' +
				'<div class="popover-navigation">' +
					'<button class="btn btn-primary" data-role="prev">« Prev</button>' +
					'<button class="btn btn-primary" data-role="next">Next »</button>' +
					'<button class="btn btn-primary" data-role="end">End tour</button>' +
				'</div>' +
			'</div>'
		};

		$this.popover(options);
		$this.popover('show')
	}


	// Events

	if ($popover.length) {
		$popover.each(function() {
			init($(this));
		});
	}

})();
