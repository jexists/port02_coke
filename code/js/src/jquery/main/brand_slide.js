//brand_slide.js

(function($){
 const brArea = $('.brand_area');
 const brWrap = brArea.children('.brand_box');
 let brLi = brWrap.children('li');
 const brLiw = brLi.eq(0).outerWidth(true);

/* let i = 0;*/
 let go;
 let timed = 1000;

 let n = 0;
 for(; n<brLi.length; n++){	
 	let lit = brLi.eq(n-1).hasClass('action');
 	if(lit){break;}
 }
 // console.log(n);

/* const SlideFunction = function(){
 	brWrap.append(brLi.eq(0));
 	brLi = brWrap.children('li');
 	brLi.removeClass('action');
 	brLi.eq(n).addClass('action');
 	brWrap.css({marginLeft:0});
 		}*/

 const SlideGo = function(){
 	go = setInterval(function(){
 			brLi = brWrap.children('li');
 			brLi.removeClass('action');
 			brLi.children('a').attr('tabindex',-1);
 			brLi.eq(n).addClass('action');
 			brLi.eq(n).children('a').attr('tabindex',0);
 		brWrap.stop().animate({marginLeft:-brLiw},timed,function(){
 			brWrap.append(brLi.eq(0));
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

 const next = brArea.find('.next_btn').children('button');
 const prev = brArea.find('.prev_btn').children('button');

 next.on('click',function(e){
 	e.preventDefault();
 			brLi = brWrap.children('li');
 			brLi.removeClass('action');
			brLi.children('a').attr('tabindex',-1);
 			brLi.eq(n).addClass('action');
			brLi.eq(n).children('a').attr('tabindex',0);
 	brWrap.stop().animate({marginLeft:-brLiw},timed,function(){
 			brWrap.append(brLi.eq(0));
 			brWrap.css({marginLeft:0});
 		});

 });

 prev.on('click', function(e){
 	e.preventDefault();
 			brLi = brWrap.children('li');
 			brLi.removeClass('action');
			brLi.children('a').attr('tabindex',-1);
 			brLi.eq(n-2).addClass('action');
			brLi.eq(n).children('a').attr('tabindex',0);
 	brWrap.stop().animate({marginLeft:+brLiw},timed,function(){
 			brWrap.prepend(brLi.eq(-1));
 			brWrap.css({marginLeft:0});
 		});
 });

})(jQuery);