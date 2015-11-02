$ (document).ready(function(){
	var high= $('.menu').offset().top;
	
	$(window).on('scroll',function(){
		if( $(window).scrollTop() >high){
			$('.menu').addClass('menu-fixed');
		}else{
			$('.menu').removeClass('menu-fixed');
		}

	});
});