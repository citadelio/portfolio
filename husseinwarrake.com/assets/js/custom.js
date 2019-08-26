(function($){

	"use strict";

	$("body, html").addClass("overflow-hidden")

/* ---------------------------------------------- /*
* Parallax Init
/* ---------------------------------------------- */

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
	$('#parallax').css({'background-attachment': 'scroll'});
} else {
	$('#parallax').parallax('100%', 0.05); 
}

if($("#parallax").length > 0) {
	var imgPath = $("#parallax img").attr('src');

	$('#parallax').css({'background-image': 'url(' +imgPath+ ')'});
}

/* ---------------------------------------------- /*
* View More - Portfolio
/* ---------------------------------------------- */


$(window).scroll(function() {
	if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
		$('.viewMore').addClass('visible')
	}
});


/* ---------------------------------------------- /*
* NavBar Toggler
/* ---------------------------------------------- */


$('.navbar-toggler').on('click', function(){
	$('.navbar-toggler').toggleClass('active');
	$('.navbar-collapse').toggleClass("collapse-open");
	$("body, html").toggleClass("overflow-hidden")
});


$(".navbar-toggler").on('click', function(e) {
	document.getElementById("ham-tick").play();
});

/* ---------------------------------------------- /*
* Initialize shuffle plugin
/* ---------------------------------------------- */

var $portfolioContainer = $('.list-items-container');

$('#filter li').on('click', function (e) {
	e.preventDefault();

	$('#filter li').removeClass('active');
	$(this).addClass('active');

	var group = $(this).attr('data-group');
	var groupName = $(this).attr('data-group');

	$portfolioContainer.shuffle('shuffle', groupName );
});

/* ---------------------------------------------- /*
* Preloader
/* ---------------------------------------------- */


$(window).on('load', function(){

	setTimeout( function(){	

		$('.loader').addClass('is-done');
		$("body, html").removeClass("overflow-hidden")
	
	}, 1500)
})


/* ---------------------------------------------- /*
* mouse follower remove area 
/* ---------------------------------------------- */

$("a, button").mouseenter(function () {
	$("#follower").addClass("active");
});
$("a, button").mouseleave(function () {
	$("#follower").removeClass("active");
});

$(document).on('mousemove', function(e){
	var width = $(document).width();
	var height = $(document).height();

	if(width > 991) {
	$('#follower').css({'display':'block','left': Number((e.pageX)-10),'top': Number((e.pageY)-10),'z-index': '9999999'});
	if(Number((e.pageX)+24) > width) { $('#follower').css({'display': 'none'}); }
	if(Number((e.pageX)) < 10) { $('#follower').css({'display': 'none'}); }
	if(Number((e.pageY)+24) > height) { $('#follower').css({'display': 'none'}); }
	if(Number((e.pageY)) < 10) { $('#follower').css({'display': 'none'}); }

	$('a, button').hover(
		function() {
			$('#follower').css({'transform':'scale(3)','border':'none','background':'rgba(0,0,255,0.1)'});
		},
		function() {
			$('#follower').css({'transform':'scale(1)','border':'2px #6C63FF solid','background':'none'});
		}
	);
	}
});

/* ---------------------------------------------- /*
* Magenic Hams
/* ---------------------------------------------- */

var hoverMouse = function($el) {
  $el.each(function() {
    var $self = $(this);
    var hover = false;
    var offsetHoverMax = $self.attr("offset-hover-max") || 0.7;
    var offsetHoverMin = $self.attr("offset-hover-min") || 0.5;

    var attachEventsListener = function() {
      $(window).on("mousemove", function(e) {
        //
        var hoverArea = hover ? offsetHoverMax : offsetHoverMin;

        // cursor
        var cursor = {
          x: e.clientX,
          y: e.clientY - $(window).scrollTop()
        };

        // size
        var width = $self.outerWidth();
        var height = $self.outerHeight();

        // position
        var offset = $self.offset();
        var elPos = {
          x: offset.left + width / 2,
          y: offset.top + height / 2
        };

        // comparaison
        var x = cursor.x - elPos.x;
        var y = cursor.y - elPos.y;

        // dist
        var dist = Math.sqrt(x * x + y * y);

        // mutex hover
        var mutHover = false;

        // anim
        if (dist < width * hoverArea) {
          mutHover = true;
          if (!hover) {
            hover = true;
          }
          onHover(x, y);
        }

        // reset
        if (!mutHover && hover) {
          onLeave();
          hover = false;
        }
      });
    };

    var onHover = function(x, y) {

      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        TweenMax.to($self, 0.4, {
          x: 0,
          y: 0,
          scale: 1,
          rotation: 0
        });
      } else {

        TweenMax.to($self, 0.4, {
          x: x * 0.8,
          y: y * 0.8,
          //scale: .9,
          rotation: x * 0.05,
          ease: Power2.easeOut
        });
      }
    };
    var onLeave = function() {
      TweenMax.to($self, 0.7, {
        x: 0,
        y: 0,
        scale: 1,
        rotation: 0,
        ease: Elastic.easeOut.config(1.2, 0.4)
      });
    };

    attachEventsListener();
  });
};

hoverMouse($('.navbar-toggler'));


})(jQuery);