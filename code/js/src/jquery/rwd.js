// rwd.js

(function($){
 const wrap = $('#wrap');
 let tempUrl ='./rwd_temp/';
/* const LoadFile = function(w){
 	switch(w){
 		case mySet[0]: wrap.load(tempUrl + 'mob.html');
 		break;
 		case mySet[1]: wrap.load(tempUrl + 'tab.html');
 		break;
 		case mySet[2]: wrap.load(tempUrl + 'pcbase.html');
 		break;
 		case mySet[3]: wrap.load(tempUrl + 'laptop.html');
 		break;
 		case mySet[4]: wrap.load(tempUrl + 'pcfull.html');
 		//default사용가능
 		break;
 	}//switch(w)
 }//LoadFile()

//현재 디바이스 크기 파악하여 정의
/* 모바일 480px~767px (280) =============== */
/* 패드 768px~1279px =============== */
/* PC 1280px~1919px (1024)=============== */
/* TV 1920px~ =============== */

let mobile = 767, pad = 1279, pc = 1919/*, tv = 1366*/;

 let nowDevice = null;
//함수를 처리해서 해당하는 값 처리
 const DeviceCheck = function(w){
  if (w <= mobile) {
  	nowDevice = mobile;
  }else if(w > mobile && w <= pad){
  	nowDevice = pad;
  }else if(w > pad && w <= pc){
  	nowDevice = pc;
  }else{nowDevice = tv;}
  return nowDevice;
 } //DeviceCheck();

 const win = $(window);
 let winW = win.outerWidth();

 let beforeDevice = DeviceCheck(winW);
/* LoadFile(beforeDevice);*/

//사이즈가 변하면 파악
 win.on('resize',function(){
	let nowWinW = win.outerWidth();
	let afterDevice = DeviceCheck(nowWinW);
	if(winW !== nowWinW && beforeDevice !== afterDevice){
	location.reload(); //새로고침
	}
 })
})(jQuery);