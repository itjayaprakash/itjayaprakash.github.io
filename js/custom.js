$(function() {

	"use strict";

    var wind = $(window);
    var windw = $(window);
    var main_height = $(".main-height").outerHeight();

    $(".sub-height").outerHeight(main_height);


    // scrollIt
    $.scrollIt({
      upKey: 38,                // key code to navigate to the next section
      downKey: 40,              // key code to navigate to the previous section
      easing: 'swing',         // the easing function for animation
      scrollTime: 600,          // how long (in ms) the animation takes
      activeClass: 'active',    // class given to the active nav element
      onPageChange: null,       // function(pageIndex) that is called when page is changed
      topOffset: -60            // offste (in px) for fixed top navigation
    });


    // navbar scrolling background
    wind.on("scroll",function () {

        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar-default");

        if(bodyScroll > 300){

            navbar.addClass("nav-scroll");

        }else{

            navbar.removeClass("nav-scroll");
        }
    });


    // button scroll to top
    wind.on("scroll",function () {

        var bodyScroll = wind.scrollTop(),
            button_top = $(".button-top");

        if(bodyScroll > 700){

            button_top.addClass("button-show");

        }else{

            button_top.removeClass("button-show");
        }
    });


	// stellar
    wind.stellar();


    // typejs
    $('.header .caption h3').typed({
        strings: ["Web Developer", "UI/UX Designer", "Blogger"],
        loop: true,
        startDelay: 1000,
        backDelay: 1000,
        typeSpeed: 30,
        showCursor: true,
		cursorChar: '|',
		autoInsertCss: true
    });


    // counterUp
    $('.numbers .counter').counterUp({
        delay: 10,
        time: 1500
    });


    // Tabs
    $(".tabs").on("click", "li", function(){

        var myID = $(this).attr("id");

        $(this).addClass("active").siblings().removeClass("active");

        $(".tabs .item").hide();

        $("#" + myID + "-content").fadeIn();

    });

    /*
    |--------------------------------------------------------------------------
        Circle Progress Bar
    |--------------------------------------------------------------------------
    */
    windw.on('load', function() {
		function animateElements() {
			$('.progressbar').each(function () {
				var elementPos = $(this).offset().top;
				var topOfWindow = windw.scrollTop();
				var percent = $(this).find('.circle').attr('data-percent');
				var barColor = $(this).find('.circle').attr('data-color');
				var percentage = parseInt(percent, 10) / parseInt(100, 10);
				var animate = $(this).data('animate');
				if (elementPos < topOfWindow + windw.height() - 30 && !animate) {
					$(this).data('animate', true);
					$(this).find('.circle').circleProgress({
						startAngle: -Math.PI / 2,
						value: percent / 100,
						size: 120,
						thickness: 14,
						fill: {
							color: barColor
						},
						animation: {
							duration: 3000,
							easing: 'circleProgressEasing'
						}
					}).on('circle-animation-progress', function (event, progress, stepValue) {
						$(this).find('div').text((stepValue*100).toFixed(1) + "%");
					}).stop();
				}
			});
		}
		// Show animated elements
		animateElements();
		windw.scroll(animateElements);
    });
    

   	// progress bar
   /* wind.on('scroll', function () {
        $(".skills-progress span").each(function () {
            var bottom_of_object = 
            $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = 
            $(window).scrollTop() + $(window).height();
            var myVal = $(this).attr('data-value');
            if(bottom_of_window > bottom_of_object) {
                $(this).css({
                  width : myVal
                });
            }
        });
    }); */


    // owlCarousel
    $('.clients .owl-carousel').owlCarousel({
        items:1,
        loop:true,
        mouseDrag:false,
        autoplay:true,
        smartSpeed:500
    });


    // isotope
    $('.gallery').isotope({
      // options
      itemSelector: '.items'
    });

    var $gallery = $('.gallery').isotope({
      // options
    });

    // filter items on button click
    $('.filtering').on( 'click', 'span', function() {

        var filterValue = $(this).attr('data-filter');

        $gallery.isotope({ filter: filterValue });

    });

    $('.filtering').on( 'click', 'span', function() {

        $(this).addClass('active').siblings().removeClass('active');

    });


    // magnificPopup
    $('.portfolio .link').magnificPopup({
      delegate: 'a',
      type: 'image'
    });


    //shar post
    $(".share").on("click", ".shar", function() {

        $(".social").toggleClass("social-active");

    });
    

});

/* mobile menu */
$(".navbar-right a").click(function(){
    $(".navbar-toggle").trigger("click");
});


$(window).on("load",function (){

    // Preloader
    $(".loading").fadeOut(500);


    // contact form
    /*$('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {
       
        if (!e.isDefaultPrevented()) {
            var url = "index.html";
            $.ajax({
                type: "POST",
                url: "mail_function.php",
                data: $(this).serialize(),
                success: function (data)
                {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    });*/

});

