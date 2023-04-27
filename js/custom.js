// templatemo 467 easy profile

// PRELOADER

$(window).load(function(){
    $('.preloader').delay(1000).fadeOut("slow"); // set duration in brackets    
});

// HOME BACKGROUND SLIDESHOW
$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch([
	 		 "images/x58BEZ.webp", 
	 		 "images/tm-bg-slide-2.jpg",
			 "images/17520.webp"
	 			], 	{duration: 3200, fade: 1300});
		});
})