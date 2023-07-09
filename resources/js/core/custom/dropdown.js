//
// Dropdown
//

'use strict';

var Dropdown = (function() {

	// Variables

	var $dropdown = $('.dropdown-animate'),
		$dropdownSubmenu = $('.dropdown-submenu [data-toggle="dropdown"]');


	// Methods

	function hideDropdown($this) {

		// Add additional .hide class for animated dropdown menus in order to apply some css behind

		var $dropdownMenu = $this.find('.dropdown-menu');

        $dropdownMenu.addClass('hide');

        setTimeout(function(){
            $dropdownMenu.removeClass('hide');
        }, 300);

	}

	function initSubmenu($this) {
        if (!$this.next().hasClass('show')) {
            $this.parents('.dropdown-menu').first().find('.show').removeClass("show");
        }

        var $submenu = $this.next(".dropdown-menu");

        $submenu.toggleClass('show');
        $submenu.parent().toggleClass('show');

        $this.parents('.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
            $('.dropdown-submenu .show').removeClass("show");
        });
	}

	// Events

	if ($dropdown.length) {
    	$dropdown.on({
    		'hide.bs.dropdown': function(e) {
    			hideDropdown($(this));
    		}
    	})
	}

	if ($dropdownSubmenu.length) {
		$dropdownSubmenu.on('click', function(e) {

			initSubmenu($(this))

			return false;
		});
	}


	// Prevent dropdown-menu on closing

	// Stop closing dropdown-menu when clicked inside
    $('.dropdown-menu').on('click', function (event) {
        var events = $._data(document, 'events') || {};

        events = events.click || [];

        for(var i = 0; i < events.length; i++) {
            if(events[i].selector) {

                //Check if the clicked element matches the event selector
                if($(event.target).is(events[i].selector)) {
                    events[i].handler.call(event.target, event);
                }

                // Check if any of the clicked element parents matches the
                // delegated event selector (Emulating propagation)
                $(event.target).parents(events[i].selector).each(function(){
                    events[i].handler.call(this, event);
                });
            }
        }

        event.stopPropagation();
    });
})();
