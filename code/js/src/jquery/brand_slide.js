//brand_slide.js

(function($){
 const brArea = $('.brand_area');
 const brWrap = brArea.children('.brand_box');
 let brLi = brWrap.children('li')

 let i = 0;
 let go;
 let timed = 1000;

 const SlideGo = function(){
 	go = setInterval(function(){
 		i++;
 		if(i>=brLi.length){i=0;}
 		brWrap.stop().animate({marginLeft:(-200*i)+'px'},timed*3,function(){
 			brWrap.append(brLi.eq(0));
 		});
 	});
 };
 const SlideStop = function(){
 	clearInterval(go);
 }
 SlideGo();
 brArea.on('mouseenter',function(){
 	SlideStop();
 })
 brArea.on('mouseleave',function(){
 	SlideGo();
 })
})(jQuery);