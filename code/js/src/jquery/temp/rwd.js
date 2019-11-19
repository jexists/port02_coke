// rwd.js

(function($){
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

 let jsUrl = '../js/src/jquery/temp/';
 let ScriptAppend = function(jsName){
  body.append('<script src="'+ jsUrl + jsName +'.js"></script>');
 };
/*
.company_area{width: 100%; height: auto; 
  &>li{
    float: left; position: relative;
    width: 30%; height: 250px; 
    margin-right: 5%;
   &:nth-child(1)>a{background: url($url + 'main/business.jpg') no-repeat 50% 50% / cover;}
   &:nth-child(2)>a{background: url($url + 'main/history.jpg') no-repeat 50% 50% / cover;}
   &:nth-child(3)>a{background: url($url + 'main/social.jpg') no-repeat 50% 50% / cover;}
   &:last-child{margin-right: 0;}
   &>a.act
*/


switch(beforeDevice){
  case 'mobile':
//break;
  case 'pad':
    ScriptAppend('burgur_btn');
  break;
  case 'pc':
//break;
  case 'tv':
    ScriptAppend('nav_pc');

  break;

 
}

//사이즈가 변하면 파악
 win.on('resize',function(){
	let nowWinW = win.outerWidth();
	let afterDevice = DeviceCheck(nowWinW);
	if(winW !== nowWinW && beforeDevice !== afterDevice){
	location.reload(); //새로고침
	}
 });
})(jQuery);