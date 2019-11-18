//main_slide.js

(function($){
const imgUrl = '../img/main_slide/';
const slide = [
{class: 'ad_01', h5:'코카콜라 들고 뉴욕여행', link:'#',bg:'new_york_bg.png', text:'코카콜라 들고 뉴욕여행',main_img:'new_york_coke.png'},
{class: 'ad_02', h5:'코카콜라 광고2', link:'#',bg:'new_york_bg.png', text:'광고',main_img:'/png'},
{class: 'ad_03', h5:'코카콜라 광고3', link:'#',bg:'new_york_bg.png', text:'광고',main_img:'/png'}
]
const adBox = $('#adBox');
const nextBtn = adBox.find('.next_btn').children('button');
const prevBtn = adBox.find('.prev_btn').children('button');
const slWrap = adBox.find('#slide_wrap')

slWrap.css({width:/* slide.length * */ 100 + '%'})


for(let i = 0; i < slide.length ;i++){
	slWrap.append('<div></div>');
	const artBox = slWrap.children('div').eq(i)
	artBox.addClass(slide[i].class);
	artBox.append('<h5 class="hd"></h5>');
	artBox.children('h5').text(slide[i].h5);
	artBox.css({backgroundImage:'url('+imgUrl+slide[i].bg+')'});
	artBox.append('<div class="Mimg_0'+(i+1)+'"></div>');
};
slWrap.children('div').css({width: 100/*/slide.length*/ + '%'})
/*링크 문자 메인사진*/
slWrap.children('div').eq(0).children('div').css({backgroundImage:'url('+imgUrl+slide[0].main_img+')'})
slWrap.children('div').eq(0).append('<p class="td"><span>new</span><span>york</span></p>')
slWrap.children('div').eq(0).append('<p class="tt"></p>');
slWrap.children('div').eq(0).find('.tt').text(slide[0].text)
slWrap.children('div').eq(0).siblings().hide();

let n=0;
let go;
let timed = 1000;
const SlideGo = function(){
 	go = setInterval(function(){
 		
 	}, timed*2);
 };

 const SlideStop = function(){
 	clearInterval(go);
 };
 SlideGo();
})(jQuery);

/*go = setInterval(function(){
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

 */