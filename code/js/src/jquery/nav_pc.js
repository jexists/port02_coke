// nav_pc.js

(function($){
	const nav = $('.navList');
	const navLi = nav.children('li');
	const navDl = navLi.children('dl');
	const navDt = navDl.children('dt');
	const DtLk = navDt.children('a');
	const navDd = navDl.children('dd');
	const DdLk = navDd.children('a');

	nav.on('mouseenter',function(){
		navDd.stop().slideDown();
	});

	nav.on('mouseleave',function(){
		navDd.stop().slideUp();
	});



})(jQuery);