// boxMake_mainProd.js

(function($){
const	Imgurl = '../img/prod_main_make/';
const brBox = [
	{logo: 'coke_logo.png', logow:'coke_logo_w.png', brand: '코카콜라', pic:'coke_prod.png', link:'#',
		text:'언제 어디서나 이 맛, 이느낌!', bgc:'#c3121f'},
	{logo: 'sprite_logo.png', logow:'sprite_logo_w.png', brand: '스프라이트', pic:'sprite_prod.png', link:'#',
		text:'상쾌하게 통한다!', bgc:'#009639'},
	{logo: 'fanta_logo.png', logow:'fanta_logo_w.png', brand: '환타', pic:'fanta_prod.png', link:'#',
		text:'마지막 한 방울까지 놓칠 수 없는 맛!', bgc:'#ff8201'},
	{logo: 'maid_logo.png', logow:'maid_logo_w.png', brand: '미닛메이드', pic:'maid_prod.png', link:'#',
		text:'자연을 담다!', bgc:'#b3df30'},
	{logo: 'power_logo.png', logow:'power_logo_w.png', brand: '파워에이드', pic:'power_prod.png', link:'#',
		text:'파워의 끝에서 파워가 시작된다!', bgc:'#009ed5'},	
	{logo: 'mate_logo.png', logow:'mate_logo_w.png', brand: '태양의 마테차', pic:'mate_prod.png', link:'#',
		text:'먹고, 마시고, 즐겨라!', bgc:'#ec3426'},	
	{logo: 'seag_logo.png', logow:'seag_logo_w.png', brand: '씨그램', pic:'seag_prod.png', link:'#',
		text:'마지막까지 톡~쏘는 상쾌함!', bgc:'#123c18'},
	{logo: 'georgia_logo.png', logow:'georgia_logo_w.png', brand: '조지아', pic:'georgia_prod.png', link:'#',
		text:'좋은 커피는 향으로 말한다!', bgc:'#916e47'},
	{logo: 'toreta_logo.png', logow:'toreta_logo_w.png', brand: '토레타', pic:'toreta_prod.png', link:'#',
		text:'목마를 때 토레타! 니가 있어 좋타!', bgc:'#b0dd5d'}];
const brandUl = $('#mainProd').children('ul');
const boxLen = brBox.length;
const boxMake = '<a href="#"><dl><dt></dt><dd class="prod"><span class="hd"></span></dd><dd class="text"></dd></dl></a>';


for(let i=0; i<boxLen ;i++){
	brandUl.append('<li></li>');
	let brandLi = brandUl.children('li').eq(i);
	brandLi.append(boxMake);
	brandLi.children('a').attr('href', brBox[i].link);
	brandLi.find('dl').css({backgroundColor:'#ddd'});
	// brandLi.find('dl').css({backgroundColor:`rgba(${brBox[i].bgc}, 1)`});
	brandLi.find('dt').css({backgroundImage:'url('+Imgurl+brBox[i].logo+')'});
	brandLi.find('dd.prod').css({backgroundImage:'url('+Imgurl+brBox[i].pic+')'});
	brandLi.find('dd.prod').children('span').text(brBox[i].brand);
	brandLi.find('dd.text').text(brBox[i].text);
	//brandLi.find('dd.text').css({backgroundColor:'rgba('+ brBox[i].bgc+',0.1)'});
}


const moreBtn = $('#mainProd').find('button');

let brLi = brandUl.children('li');
let brLiLength = brLi.length;
console.log(brLiLength);

brLi.hide()
const show = function(l){
	for (let m=0; m<l; m++){ brLi.eq(m).show(); }
	// brLi.eq(l).find('a').focus();
}
//=====================================================
 const win = $(window);
 const body = $('body');
// const wrap = $('#wrap');
//현재 디바이스 크기 파악하여 정의
/* 모바일 480px~767px (280) =============== */
/* 패드 768px~1279px =============== */
/* PC 1280px~1919px (1024)=============== */
/* TV 1920px~ =============== */

 let mobile = 767, pad = 1279, pc = 1919, tv = 1366;
 let nowDevice = null;

 const DeviceCheck = function(w){
  if (w <= mobile) {
  	nowDevice = 'mobile';
  }else if(w > mobile && w <= pad){
  	nowDevice = 'pad';
  }else if(w > pad && w <= pc){
  	nowDevice = 'pc';
  }else{nowDevice = 'tv';}
  return nowDevice;
 }; //DeviceCheck();
DeviceCheck();

 let winW = win.outerWidth();
 let beforeDevice = DeviceCheck(winW);

let n = 3;

switch(beforeDevice){
  case 'mobile':
//break;
  case 'pad':
    show(n+=3);
    moreBtn.on('click',function(e){
		show(n+=3);
		if(brLiLength <= n){
		  moreBtn.hide();
		  brandUl.css({marginBottom:'80px'})
		}
	brLi.eq(n-3).find('a').focus();
	});
  break;
  case 'pc':
//break;
  case 'tv':
    n = 5;
    show(n);
    moreBtn.on('click',function(e){
		show(n+=5);
		if(brLiLength <= n){
		  moreBtn.hide();
		  brandUl.css({marginBottom:'80px'})
		}
	brLi.eq(n-5).find('a').focus();
	});
  break;
}

//==============================================




const brLink = brLi.children('a');
brLink.on('mouseenter focus',function(e){
	e.preventDefault();
	$(this).addClass('act');
	let i = $(this).parents('li').index();
	console.log(i)
	brLi.find('dl').eq(i).css({backgroundColor:`rgba(${brBox[i].bgc}, 1)`});
	brLi.find('dt').eq(i).css({backgroundImage:'url('+Imgurl+brBox[i].logow+')'});
	
});

brLink.on('mouseleave blur',function(){
	let i = $(this).parents('li').index();
	$(this).removeClass('act');
	brLi.find('dl').css({backgroundColor:'#ddd'});
	brLi.find('dt').eq(i).css({backgroundImage:'url('+Imgurl+brBox[i].logo+')'});
});

})(jQuery);