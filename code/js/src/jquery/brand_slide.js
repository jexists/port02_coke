//brand_slide.js

(function($){
 const brArea = $('.brand_area');
 const brWrap = brArea.children('.brand_box');
 let brLi = brWrap.children('li');
 const brLiw = brLi.eq(0).outerWidth(true);

 let i = 0;
 let go;
 let timed = 1000;

 let n = 0;
 for(; n<brLi.length; n++){	
 	let lit = brLi.eq(n).hasClass('action');
 	if(lit){break;}
 }
 console.log(n);

 const SlideGo = function(){
 	go = setInterval(function(){
 		brWrap.stop().animate({marginLeft:-brLiw},timed,function(){
 			brWrap.append(brLi.eq(0));
 			brLi = brWrap.children('li');
 			brLi.removeClass('action');
 			brLi.eq(n).addClass('action');
 			// 	brLi.eq(n+1).css({transform:'scale(1.3)', margin: '0 40px',opacity:1});
			// brLi.eq(n+1).children('a').css({transform:'scale(0.8)'});

 			brWrap.css({marginLeft:0});
 		});
 	}, timed*2);
 };

 const SlideStop = function(){
 	clearInterval(go);
 };

 SlideGo();

 brArea.on('mouseenter',function(){
 	SlideStop();
 });
 brArea.on('mouseleave',function(){
 	SlideGo();
 });
})(jQuery);