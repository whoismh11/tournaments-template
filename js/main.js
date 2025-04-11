/*
	By MH11
*/

(function($) {
	"use strict"

	// Preloader
	$(window)
		.on('load', function() {
			$("#preloader")
				.delay(600)
				.fadeOut();
		});

	// Back To Top
	$(document).ready(function() {
		$(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				$('#scrolltop').fadeIn();
			} else {
				$('#scrolltop').fadeOut();
			}
		});
		$('#scrolltop').click(function() {
			$("html, body").animate({
				scrollTop: 0
			}, 600);
			return false;
		});
	});
})(jQuery);
