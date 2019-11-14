(function($){
	const headBox = $('#headBox');
	const nav = $('.navList');
	const navLi = nav.children('li');
	const navDl = navLi.children('dl');
	const navDt = navDl.children('dt');
	const dtLk = navDt.children('a');
	const navDd = navDl.children('dd');
	const ddLk = navDd.children('a');

	nav.on('mouseenter',function(){
		navDd.stop().slideDown();
		$(this).closest(headBox).addClass('act');
	});

	nav.on('mouseleave',function(){
		navDd.stop().slideUp();
		$(this).closest(headBox).removeClass('act');
	});



})(jQuery);