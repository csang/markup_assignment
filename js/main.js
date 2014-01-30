(function($){

	var	image_srcs = ['assets/img/carousel_1.jpg',
						'assets/img/carousel_2.jpg',
						'assets/img/carousel_3.jpg'],
		elipse_srcs = ['assets/img/off.png',
						'assets/img/on.png'],
		elipse1 = $('.elipses .elipse1'),
		elipse2 = $('.elipses .elipse2'),
		elipse3 = $('.elipses .elipse3'),
		elipses = $('.elipses img'),
		arrows = $('.arrows img'),
		current_index = 0;

	var reset_elipses = function(){
		elipse1.attr('src', elipse_srcs[0]);
		elipse2.attr('src', elipse_srcs[0]);
		elipse3.attr('src', elipse_srcs[0]);
	}

	$('.arrows img').click(function(){
		var carousel_img = $('.carousel .image img'),
			src = carousel_img.attr('src');

		if (carousel_img.is(':animated')) {
			return 0;
		};

		if(this == arrows[0]){

			current_index--
			if (current_index < 0) {
				current_index = 2;
			};

			carousel_img.animate({
				marginLeft: '-500px',
				opacity: '.0'
			},250, function(){
				carousel_img.attr('src', image_srcs[current_index]);
				carousel_img.css('margin-left','0').animate({
					opacity: '1'
				},250);
			});
			
			reset_elipses();

			if(src == image_srcs[0]){
				elipse3.attr('src', elipse_srcs[1]);
			}else if(src == image_srcs[2]){
				elipse2.attr('src', elipse_srcs[1]);
			}else if(src == image_srcs[1]){
				elipse1.attr('src', elipse_srcs[1]);
			}
		}else{
			current_index++
			if (current_index > 2) {
				current_index = 0;
			};

			carousel_img.animate({
				marginLeft: '500px',
				opacity: '.0'
			},250, function(){
				carousel_img.attr('src', image_srcs[current_index]);
				carousel_img.css('margin-left','0').animate({
					opacity: '1'
				},250);
			});

			reset_elipses();

			if(src == image_srcs[0]){
				elipse2.attr('src', elipse_srcs[1]);
			}else if(src == image_srcs[1]){
				elipse3.attr('src', elipse_srcs[1]);
			}else if(src == image_srcs[2]){
				elipse1.attr('src', elipse_srcs[1]);
			}
		}
	})

	$('.elipses img').click(function(){
		var carousel_img = $('.carousel .image img');

		if(this == elipses[0]){
			carousel_img.attr('src', image_srcs[0]);
			current_index = 0;
			reset_elipses();
			elipse1.attr('src', elipse_srcs[1]);
		}else if(this == elipses[1]){
			carousel_img.attr('src', image_srcs[1]);
			current_index = 1;
			reset_elipses();
			elipse2.attr('src', elipse_srcs[1]);
		}else{
			carousel_img.attr('src', image_srcs[2]);
			current_index = 2;
			reset_elipses();
			elipse3.attr('src', elipse_srcs[1]);
		}
	})

})(jQuery);