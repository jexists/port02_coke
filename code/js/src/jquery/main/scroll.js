//scroll.js

(function($){
 const wrap = $('#wrap');
 const scrollEl = wrap.find('.scroll');
 let myScrollElTop = [];
 const htmlEl = $('html, body');
 htmlEl.animate({scrollTop:0});

 for(let i=0; i<scrollEl.length; i++){
 	let scTop = scrollEl.eq(i).offset().top;
 	myScrollElTop.push(scTop);
 }


 let myStatus = true; 
 let useN = 0;
 let n;
 let scrollLen = scrollEl.length;
 let timed = 1000;
 let ease = 'swing'

  const ScrollMagic = function(){
  	htmlEl.animate({scrollTop:myScrollElTop[useN]},timed,ease,function(){
			myStatus = true;});
  }//ScrollMagic()

 $(window).on('mousewheel DOMMouseScroll',function(e){
  	
 	if(e.originalEvent.wheelDelta){
 		n = e.originalEvent.wheelDelta * -1; //아래로내리면 플러스 위로 스크롤시 -
 	}else{
 		n = e.detail * 40;
 	}
 	//console.log(n);

	if(myStatus){
		myStatus = false; // 트랙패드?오류 상태를 강제적으로 바꾸기 
		if (n>0){
			useN++;
			if(useN >= scrollLen){useN=scrollLen-1;}
			console.log(useN);
			ScrollMagic();
		}else{
			useN--;
			if(useN < 0){useN=0;}
			console.log(useN);
			ScrollMagic();
		}
	}
 });

 //======================================
 const gnb = $('#gnb');
 const gnbUl = gnb.find('ul');
 const gnbLi = gnb.find('li');
 const gnbLink = gnbLi.find('a');

 gnbLink.on('click',function(e){
 	e.preventDefault();
 	//let thisLink = $(this).attr('href');
 	useN = $(this).parent('li').index();
 	//let thisOffset = $(thisLink).offset().top;
 	//htmlEl.animate({scrollTop:thisOffset});
 	ScrollMagic();
 });


//터치패드 트랙패드 사용시
let startP;
let endP;

$(window).on('touchstart',function(e){ //화면에 손가락이 닿는 순간
	startP = e.originalEvent.touches[0].pageY;
});
$(window).on('touchmove',function(e){ //touchmove: 움직일때 
		//ScrollMagic(); //배경을 움직이지 않게 멈추기 기능
		htmlEl.animate({scrollTop:myScrollElTop[useN]},0)
	});
$(window).on('touchend',function(e){ // 화면에 손가락을 
		//e.preventDefault();
		endP = e.originalEvent.changedTouches[0].pageY;
if(myStatus){
		myStatus = false; // 트랙패드?오류 상태를 강제적으로 바꾸기 
		if (startP>endP){
			useN++;
			if(useN >= scrollLen){useN=scrollLen-1;}
			console.log(useN);
			ScrollMagic();
		}else{
			useN--;
			if(useN<=-1){useN=0;}
			console.log(useN);
			ScrollMagic();
		}
	}
	});

})(jQuery);