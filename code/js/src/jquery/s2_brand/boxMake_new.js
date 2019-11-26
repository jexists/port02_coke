// boxMake_new.js

(function($){
const	Imgurl = '../img/prod_main_make/';

const brBox = [
	{logo: 'coke_logo.png', logow:'coke_logo_w.png', brand: '코카콜라 커피', pic:'coke_coff.png', link:'#',
		text:'나른한 오후를 깨워줄 새로운 짜릿함!', bgc:'#c3121f'},
	{logo: 'coke_logo.png', logow:'coke_logo_w.png', brand: '코카콜라 프로즌', pic:'coke_frozen.png', link:'#',
		text:'여름을 더 짜릿하게! 얼려 먹는 코카-콜라!', bgc:'#c3121f'},
	{logo: 'seag_logo.png', logow:'seag_logo_w.png', brand: '씨그램', pic:'seag_prod.png', link:'#',
		text:'마지막까지 톡~쏘는 상쾌함!', bgc:'#123c18'},
	{logo: 'fanta_logo.png', logow:'fanta_logo_w.png', brand: '환타 포도맛', pic:'fanta_grap.png', link:'#',
		text:'마지막 한 방울까지 놓칠 수 없는 맛!', bgc:'#ff8201'},
	{logo: 'sprite_logo.png', logow:'sprite_logo_w.png', brand: '스프라이트 배향', pic:'sprite_pear.png', link:'#',
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

const newbox = $('#newProd').find('.newbox');
const moreBtn = $('#newProd').find('button');

let Ulheight = brandUl.outerHeight();
if(Ulheight == 0){
	Ulheight = 640;
}



$('#newProd').css({marginBottom:'250px'})
newbox.css({height: Ulheight - 20 +'px', marginBottom: '20px'})
// newbox.css({height: '620px', marginBottom: '20px'})
// console.log(Ulheight)
moreBtn.hide();


let brLi = brandUl.children('li');
let brLiLength = brLi.length;
//console.log(brLiLength);


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


let newLi = brLi.eq(0).contents().clone(true);
newbox.html(newLi);	
newbox.find('dl').css({backgroundColor:`rgba(${brBox[0].bgc})`});
newbox.find('dt').css({backgroundImage:'url('+Imgurl+brBox[0].logow+')'});
// brLi.eq(0).children('a').addClass('act');
brLi.find('dl').eq(0).css({backgroundColor:`rgba(${brBox[0].bgc}, 1)`});
brLi.find('dt').eq(0).css({backgroundImage:'url('+Imgurl+brBox[0].logow+')'});

const brLink = brLi.children('a');
brLink.on('mouseenter focus',function(e){
	e.preventDefault();
	$(this).addClass('act');
	let i = $(this).parent().index();
	brLi.find('dl').css({backgroundColor:'#ddd'});

	for(let k=0; k < brLi.length; k++){
		if(k == i){continue;}
		// console.log(brBox[k].logo);
		brLi.eq(k).find('dt').css({backgroundImage:'url('+Imgurl+brBox[k].logo+')'});
	}

	brLi.find('dl').eq(i).css({backgroundColor:`rgba(${brBox[i].bgc}, 1)`});
	brLi.find('dt').eq(i).css({backgroundImage:'url('+Imgurl+brBox[i].logow+')'});
	let newLi = brLi.eq(i).contents().clone();
	//console.log(newLi);
	newbox.html(newLi);
	newbox.find('dd.text').text(brBox[i].text);
});

brLink.on('mouseleave blur',function(){
	let i = $(this).parents('li').index();
	$(this).removeClass('act');
	//brLi.find('dl').css({backgroundColor:'#ddd'});
	//brLi.find('dt').eq(i).css({backgroundImage:'url('+Imgurl+brBox[i].logo+')'});
});

brLink.on('blur',function(){
	let i = $(this).parents('li').index();
	$(this).removeClass('act');
	brLi.find('dl').css({backgroundColor:'#ddd'});
	brLi.find('dt').eq(i).css({backgroundImage:'url('+Imgurl+brBox[i].logo+')'});
});

/*newbox.find('a').on('mouseenter focus',function(e){
	$(this).addClass('act');
});
newbox.find('a').on('mouseleave blur',function(e){
	$(this).removeClass('act');
});*/

})(jQuery);