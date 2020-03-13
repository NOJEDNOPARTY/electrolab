var common = {
	init: function() {
		common.main();
	},
	main: function(){
		var bLazy = new Blazy({});

		$('.menu-trigger').click(function(event){
			event.preventDefault();
			$(this).toggleClass('open');
			$('header').toggleClass('open');
		})

		$('.phone-mask').mask("+7 (999) 999-99-99");

		$('.anchor').click(function(event){
			event.preventDefault();
			var id  = $(this).attr('href'),
			top = $(id).offset().top;
			$('body,html').animate({scrollTop: top - 50}, 3000);
			$('.menu-trigger').removeClass('open');
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
			$('.menu-trigger').removeClass('open');
			$('header').removeClass('open');
		});
		$('.politics-btn').click(function(event){
			event.preventDefault();
			$('.popup-wrapper').removeClass('active');
			$('#politicsPopup').addClass('active');
		});

		$('.callback').click(function(event){
			event.preventDefault();
			$('#orderPopup').addClass('active');
		});

		$('.popup-close').click(function(event){
			event.preventDefault();
			$('.popup-wrapper').removeClass('active');
		});

		function fixedHead() {
			if($(window).width() < 768) {
				$('header').removeClass('fixed');
				$('body').css({'margin-top': 0})
				$('.header-mob').addClass('fixed');
				$('body').css({'margin-top':$('.header-mob').height()})
			}else {
				$('.header-mob').removeClass('fixed');
				$('body').css({'margin-top': 0})
				$('header').addClass('fixed');
				$('body').css({'margin-top':$('header').height()})
			}
		};
		fixedHead();


		$(window).resize(function() {
			fixedHead();
		});

	}
};

(function() {
	common.init();
}());
