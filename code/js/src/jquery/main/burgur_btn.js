// burgur_btn.js

(function($){
 const openBtn = $('.open_btn');
 const openspan = openBtn.find('span.burgur');
 const allGnb = $('.all_gnb');
 const closeBtn = $('.close_btn');
 const closespan = closeBtn.find('span.burgur');

openBtn.on('click focus',function(e){
	e.preventDefault();
 	openspan.addClass('act');
 	allGnb.stop().fadeIn(2000);
 	$(this).stop().fadeOut();
 	closespan.addClass('act');
 });
closeBtn.on('click', function(e){
	e.preventDefault();
	allGnb.stop().fadeOut();
	openBtn.stop().fadeIn();
	// $(this).children(closespan).addClass('act');
	openspan.removeClass('act');
});
 // button.on('focus',function(){
 // 	$(this).children(span).addClass('act');
 // });
 // button.on('blur',function(){
 // 	$(this).children(span).removeClass('act');
 // });
})(jQuery);