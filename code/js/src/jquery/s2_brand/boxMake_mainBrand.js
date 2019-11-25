// boxMake_mainBrand.js

(function($){
const	Imgurl = '../img/prod_brand_make/';
const brBox = [
	{logo: 'coke_logo.png', logow:'coke_logo_w.png', brand: '코카콜라', link:'#',},
	{logo: 'sprite_logo.png', logow:'sprite_logo_w.png', brand: '스프라이트', link:'#'},
	{logo: 'fanta_logo.png', logow:'fanta_logo_w.png', brand: '환타', link:'#'},
	{logo: 'maid_logo.png', logow:'maid_logo_w.png', brand: '미닛메이드', link:'#'},
	{logo: 'power_logo.png', logow:'power_logo_w.png', brand: '파워에이드', link:'#'},	
	{logo: 'mate_logo.png', logow:'mate_logo_w.png', brand: '태양의 마테차', link:'#'},	
	{logo: 'seag_logo.png', logow:'seag_logo_w.png', brand: '씨그램', link:'#'},
	{logo: 'georgia_logo.png', logow:'georgia_logo_w.png', brand: '조지아', link:'#'},
	{logo: 'toreta_logo.png', logow:'toreta_logo_w.png', brand: '토레타', link:'#'}];
const brandUl = $('#mainBrand').children('ul');
const boxLen = brBox.length;
const boxMake = '<a href="#"><span class="hd"></span></a>';


for(let i=0; i<boxLen ;i++){
	brandUl.append('<li></li>');
	let brandLi = brandUl.children('li').eq(i);
	brandLi.append(boxMake);
	brandLi.children('a').attr('href', brBox[i].link);
	// brandLi.children('a').css({backgroundColor:'#ddd'});
	brandLi.children('a').css({backgroundImage:'url('+Imgurl+brBox[i].logo+')'});
	brandLi.children('a').css({backgroundSize:'120% auto'});
	brandLi.children('a').css({backgroundPosition:'50% 50%'});
	brandLi.children('a').css({backgroundRepeat:'no-repeat'});
	brandLi.children('a').children('span').text(brBox[i].brand);
	// brandLi.children('a').css({borderRadius:'20px'});
	//brandLi.find('dl').css({backgroundColor:'#ddd'});
	// brandLi.find('dl').css({backgroundColor:`rgba(${brBox[i].bgc}, 1)`});
	//brandLi.find('dt').css({backgroundImage:'url('+Imgurl+brBox[i].logo+')'});
	//brandLi.find('dd.prod').css({backgroundImage:'url('+Imgurl+brBox[i].pic+')'});
	//brandLi.find('dd.prod').children('span').text(brBox[i].brand);
	//brandLi.find('dd.text').text(brBox[i].text);
	//brandLi.find('dd.text').css({backgroundColor:'rgba('+ brBox[i].bgc+',0.1)'});
}


const moreBtn = $('#mainBrand').find('button');

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
	// $(this).addClass('act');
	let i = $(this).parents('li').index();
	console.log(i)
	// $(this).eq(i).css({backgroundColor:`rgba(${brBox[i].bgc}, 1)`});
	$(this).css({backgroundImage:'url('+Imgurl+brBox[i].logow+')'});
	$(this).css({backgroundSize:'150% auto'});
});

brLink.on('mouseleave blur',function(){
	let i = $(this).parents('li').index();
	// $(this).removeClass('act');
	// brLi.find('dl').css({backgroundColor:'#ddd'});
	$(this).css({backgroundImage:'url('+Imgurl+brBox[i].logo+')'});
	$(this).css({backgroundSize:'120% auto'});
});

})(jQuery);