/*=================================
            Services
===================================*/
$( function() {
	new WOW().init();
} );

/*=================================
            Work
===================================*/

$( function() {
	$( '.work' ).magnificPopup( {
		delegate: 'a', // child items selector, by clicking on it popup will open
		type: 'image',
		gallery: {
			enabled: true
		}
	} );
} );

/*=================================
            Team
===================================*/

$(function(){
  $('.team-groups').owlCarousel({
      loop: true,
      autoplay: true,
      smartSpeed: 900,
	  responsive: {
		  0: {
			items: 1
		  },
		  480: {
			items: 2
		  },
		  768: {
			items: 3
		  }
		}
  });
});

/*=================================
            Testimonial
===================================*/

$(function(){
  $('.testimonials-group').owlCarousel({
	  items: 1,
      loop: true,
      autoplay: true,
      smartSpeed: 900,
	  autoplayHoverPause: true
  });
});

/*=================================
            Navigation
===================================*/

// show/hide navigatioin

$(window).scroll(function() {
	if($(this).scrollTop() < 50 ) {
		$('nav').removeClass('navbar-custom');
		$('#back-to-top').fadeOut();
	} else {
		$('nav').addClass('navbar-custom');
		$("#back-to-top").fadeIn();
	}
});

$(function() {
	$('a.smooth-scroll').click(function(event) {
		event.preventDefault();
		var navLink = $(this).attr('href');
		$('html,body').animate({
			scrollTop: $(navLink).offset().top - 64
		}, 1250);
	});
});

// close toggle menu
$(function() {
	var closeMenu = $('.navbar-nav li a');
	$(closeMenu).on('click touch', function() {
		$('.navbar-toggle').click();
	});
});
