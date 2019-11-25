// boxMake_new.js

(function($){
const	Imgurl = '../img/prod_main_make/';
const brBox = [
		{logo: 'coke_logo.png', logow:'coke_logo_w.png', brand: '코카콜라 커피', pic:'coke_coff.png', link:'#',
		text:'나른한 오후를 깨워줄 새로운 짜릿함!', bgc:'#c3121f'},
	{logo: 'coke_logo.png', logow:'coke_logo_w.png', brand: '코카콜라 프로즌', pic:'coke_frozen.png', link:'#',
		text:'여름을 더 짜릿하게! 얼려 먹는 코카-콜라!', bgc:'#c3121f'},
	{logo: 'sprite_logo.png', logow:'sprite_logo_w.png', brand: '스프라이트 시원한 배향', pic:'sprite_pear.png', link:'#',
		text:'스프라이트 시원한 배향', bgc:'#009639'}];
const brandUl = $('#newProd').children('ul');
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
	brandLi.find('dd.text').text(brBox[i].brand);
	//brandLi.find('dd.text').css({backgroundColor:'rgba('+ brBox[i].bgc+',0.1)'});
}


const moreBtn = $('#newProd').find('button');

moreBtn.hide();

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