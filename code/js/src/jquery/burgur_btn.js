// burgur_btn.js

(function($){
 const button = $('.burgur_btn');
 const span = button.children('span');

button.on('click',function(e){
	e.preventDefault();
 	$(this).children(span).toggleClass('act');
 });
 // button.on('focus',function(){
 // 	$(this).children(span).addClass('act');
 // });
 // button.on('blur',function(){
 // 	$(this).children(span).removeClass('act');
 // });
})(jQuery);