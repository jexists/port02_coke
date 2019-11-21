//main_slide.js

(function($){
const imgUrl = '../img/main_slide/';
const slide = [
{class: 'ad_01', h5:'코카콜라 들고 뉴욕여행 광고', link:'#',bg:'bg_01.png',
	text:'코카콜라 들고 뉴욕여행', subtext:'<span>new</span><span>york</span>', 
	main_img:'mpic_01.png'},
{class: 'ad_02', h5:'파워에이드와 함께 JTBC 서울마라톤 광고', link:'#', bg:'bg_02.png', 
	text:'<span>파워에이드와 함께</span> <span>JTBC 서울마라톤</span>', subtext:'<span>10km</span><span>완주</span>', 
	main_img:'mpic_02.png'},
{class: 'ad_03', h5:'코카콜라 함께 떠나는 인스타 PICK', link:'#',bg:'bg_03.jpg', 
	text:'코카콜라와 함께 떠나는', subtext:'<span>인스타 </span><span>Pick</span>',
	main_img:'mpic_03.png'}];
const adBox = $('#adBox');
const nextBtn = adBox.find('.next_btn').children('button');
const prevBtn = adBox.find('.prev_btn').children('button');
const slWrap = adBox.find('#slide_wrap')

slWrap.css({width: (slide.length+1) *  100 + '%', marginLeft: -100+'%'})


for(let i = 0; i < slide.length ;i++){
	slWrap.append('<div></div>');
	let artBox = slWrap.children('div').eq(i)
	artBox.addClass(slide[i].class + ' slide');
	artBox.append('<h5 class="hd"></h5>');
	artBox.children('h5').text(slide[i].h5);
	artBox.css({backgroundImage:'url('+imgUrl+slide[i].bg+')'});
	artBox.append('<div class="Mimg_0'+(i+1)+' mBox"></div>');
	let slDiveq = slWrap.children('div').eq(i);
	slDiveq.children('div').css({backgroundImage:'url('+imgUrl+slide[i].main_img+')'})
	slDiveq.append('<p class="tt"></p>');
	slDiveq.find('.tt').append(slide[i].text)
	slDiveq.append('<p class="td">' + slide[i].subtext + '</p>')
};
/*링크 문자 메인사진*/
// slWrap.children('div').eq(0).siblings().hide();
let slDiv = slWrap.find('.slide');
const slCl = slDiv.eq(-1).clone(true);
slWrap.children('h4').after(slCl);
slDiv = slWrap.find('.slide');
slDiv.css({width: 100/(slide.length+1) + '%'});
let divLen = slDiv.length;

let n=0;
let go;
let add;
let timed = 1000;

let j = 0;
setTimeout(function(){
	slDiv.eq(j+1).addClass('act');
}, 200);

nextBtn.on('click',function(e){
	e.preventDefault();
	j++;
	if(j>=divLen-1){
		j=0; 
		slWrap.css({left:100+'%'});
	}

	slWrap.stop().animate({left:-100*j+'%'},timed, function(){
		slDiv.removeClass('act');
		slDiv.eq(j+1).addClass('act');
	});
	
});

prevBtn.on('click',function(e){
	e.preventDefault();
	j--;
	slWrap.stop().animate({left:-100*j+'%'},timed, function(){
		if(j<0){
			j=divLen-2; 
			slWrap.css({left:-100*j+'%'})
		}
		slDiv.removeClass('act');
		slDiv.eq(j+1).addClass('act');
	});
});

const AutoSlide = function(){
	go = setInterval(function(){
		nextBtn.trigger('click');
	}, timed * 5);
};
const StopSlide = function(){
	clearInterval(go);
};

AutoSlide();



slWrap.on('mouseenter', function(){
	StopSlide();
});
slWrap.on('mouseleave', function(){
	AutoSlide();
});

})(jQuery);
 