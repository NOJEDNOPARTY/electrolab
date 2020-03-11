var common = {
	init: function() {
		common.main();
	},
	main: function(){
		var bLazy = new Blazy({});

		// $('.menu-trigger').click(function(event){
		// 	event.preventDefault();
		// 	$('header').toggleClass('open');
		// })
		

		// $('.phone-mask').mask("+380(99) 999-99-99");

		$('.anchor').click(function(event){
			event.preventDefault();
			var id  = $(this).attr('href'),
			top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 3000);
			$('header').removeClass('open');
		});

		// $('.form-call').click(function(event){
		// 	event.preventDefault();
		// 	$('#formPopup').addClass('active');
		// });

		// $('.popup-close').click(function(event){
		// 	event.preventDefault();
		// 	$('.popup-wrapper').removeClass('active');
		// });
	}
};

(function() {
	common.init();
}());
