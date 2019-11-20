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
  let browser = navigator.userAgent.toLowerCase();
  let nowb = null;
  if(browser.indexOf('firefox') !== -1){
    nowb = 'firefox';
  }else{
    nowb = 'other';
  }
//사이즈가 변하면 파악
 win.on('resize',function(){
  let nowWinW = win.outerWidth();
  let afterDevice = DeviceCheck(nowWinW);
  if(winW !== nowWinW && beforeDevice !== afterDevice){
    if(nowb == 'firefox'){
      window.location = window.location; //강제 새로고침
    }else{
      location.reload();}
  }
 });
})(jQuery);