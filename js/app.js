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

		$('.phone-mask').mask("+7 (999) 999-99-99");

		$('.anchor').click(function(event){
			event.preventDefault();
			var id  = $(this).attr('href'),
			top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 3000);
			$('header').removeClass('open');
		});

		$('.form-row input').keyup(function(){
			if($(this).val() == '') {
				$(this).closest('.form-row').removeClass('active')
			}else {$(this).closest('.form-row').addClass('active')}
			
		});

		$('.consultation-btn').click(function(event){
			event.preventDefault();
			$('#consultationPopup').addClass('active');
		});

		$('.callback').click(function(event){
			event.preventDefault();
			$('#orderPopup').addClass('active');
		});

		$('.popup-close').click(function(event){
			event.preventDefault();
			$('.popup-wrapper').removeClass('active');
		});
	}
};

(function() {
	common.init();
}());
