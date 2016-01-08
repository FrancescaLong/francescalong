$(document).ready(function() {
    	
			$('ul a').click(function() {
			var $anchor = $(this);
			
			$('html, body').animate({
			scrollTop: $($anchor.attr('href')).offset().top
			}, 2000);
			return false;
			helpers : {
			}

			});
			});


/*

			$(function() {
    			$('.panel-image img.panel-image-preview').on('click', function(e) {
	    		$(this).closest('.panel-image').toggleClass('hide-panel-body');
    			});
				});

*/


$(function() {
    $('.panel-image img.panel-image-preview').on('click', function(e) {
        $(this).closest('.panel-image').toggleClass('hide-panel-body');
    });
});
