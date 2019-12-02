//s3_story_make.js

(function($){
	const imgUrl = '../img/event/';
	let stBox;
	$.ajax({
		async:false,
		type:'get',
		url:'../data/stBox.json',
		dataType:'json',
		error:function(){console.log('data error');},
		success:function(data){
			stBox = data;
			return stBox;}
	});

 let stLen = stBox.length;
	const stMake = '<a href="#"><div class="img"><span></span></div><dl class="text"><dt></dt><dd></dd></dl></a>';
 

 for(let n=0; n<stLen; n++){
 	allSt.find('ul').append('<li></li>');
 	Lieq = allSt.find('ul').children('li').eq(n);
 	Lieq.addClass(stBox[n].class);
 	Lieq.append(stMake);
 	Lieq.children('a').attr('href',stBox[n].link);
 	Lieq.find('.img').css({backgroundImage:`url('${imgUrl+stBox[n].bg}')`});
 	Lieq.find('.img').children('span').text(stBox[n].span);
 	Lieq.find('.text').children('dt').text(stBox[n].title);
 	Lieq.find('.text').children('dd').text(stBox[n].contents);
 };

 const stLink = ['allStory', 'cokeStory', 'globStory', 'korStory', 'sporStory', 'pressStory'];
/* const stLi
 for(let i=0; i<stLink.length;i++){
 }*/

 
 const allSt = $('#allStory');
 let stLi = allSt.find('ul').children('li');
 let stLiLen = stLi.length;
	stLi.hide();

 

//=====================================================
 const win = $(window);
 const body = $('body');

 let mobile = 767, pad = 1279, pc = 1919, tv = 1366;
 let nowDevice = null;

 let n = 6, mobN = 6, pcN = 10, myn = 0;

 const stLiArr = []; // <====

 const DeviceCheck = function(w){
  if (w <= mobile) {
  	nowDevice = 'mobile';
  }else if(w > mobile && w <= pad){
  	nowDevice = 'pad';
  }else if(w > pad && w <= pc){
  	nowDevice = 'pc';
  }else{nowDevice = 'tv';}
  
		switch(nowDevice){
			  case 'mobile': //break;
			  case 'pad': //break;
			  case 'pc': 
				  base = mobN;
			  break;
			  case 'tv':
				  base = pcN;
			  break;
			}
  return nowDevice;
 }; //DeviceCheck();
DeviceCheck();

let winW = win.outerWidth();
let beforeDevice = DeviceCheck(winW);

// ---------------------------------------------------------
const MyLishow = function(j){		
  let l = j | 0;
		if(stLi.length % base == 0){
				part = stLi.length / base;
			}else{
				part = (stLi.length / base) + 1;
			}

		for(let i=0; i <= part; i++){ stLiArr[i] = base * i; }

		stLi.hide();
		let prevN, nextN, nLn = stLiArr.length-1;

		//console.log(stLiArr);

		if(l == 0 ){
			 prevN = stLiArr[0];
			 nextN = stLiArr[1];
		}else if(l >= nLn){
			 prevN = stLiArr[nLn-1];
		  nextN = stLiArr[nLn];
		}else{
			 prevN = stLiArr[l-1];
		  nextN = stLiArr[l];
		}

		stLi.eq( prevN ).show();
		stLi.eq( prevN ).nextUntil( stLi.eq( nextN ) ).show();
		// console.log(prevN, nextN);
};

// ---------------------------------------------------------
	MyLishow();
	const numBtn = $('#contentBox').find('.numLink');
	for(let b=0; b<(stLen/base-1) ;b++){
 	numBtn.append('<li><button type="button">'+(b+1)+'</button></li>');
 }
 	numBtn.prepend('<li><button type="button"><i class="fas fa-angle-double-left"></i></button></li>');
 	numBtn.append('<li><button type="button"><i class="fas fa-angle-double-right"></i></button></li>');

 const stBtnLi = numBtn.children('li');
 const stBtn = stBtnLi.children('button');
 const firstBtn = stBtnLi.eq(0).children();
 
 firstBtn.hide();
 stBtnLi.eq(5).nextUntil((stBtnLi.eq(-1))).hide();
 


 stBtn.on('click',function(e){
  	myn = $(this).parent().index();
  	MyLishow(myn);
  	firstBtn.show();
  	$(this).addClass('act');
 });
 
 stBtnLi.eq(1).children().on('click',function(e){
  	firstBtn.hide();
 });

 let btnLeng = stBtnLi.length;
 console.log(btnLeng);
/* let btnLeng = stBtnLi.length;
 console.log(btnLeng);
  
 let b=5;
 for(let n=0;n>(btnLeng/5)-2 ;n++){
  stBtnLi.eq(b).on('click',function(e){
 	b*=n
  	stBtnLi.eq(b).nextUntil($(this)).hide();
  	$(this).nextUntil((stBtnLi.eq(b))).show();
  	console.log(b)
  });
 }*/
 let t;
 const btnNext = function(t,n){
 	stBtnLi.eq(n).nextUntil(t).hide();
 	t.hide();
 	t.nextUntil((stBtnLi.eq(n+11))).show();
 }
 const btnPrev = function(t,n){
 	t.nextUntil((stBtnLi.eq(-1))).hide();
 	t.hide();
 	t.prevUntil((stBtnLi.eq(n-6))).show();
 	
 }

/* for(let i=0; i<stBtnLi.length; i++){
  if(i%5 == 0){
  	stBtnLi.eq(i).on('click',function(e){
 	t = $(this);
 	btnNext(t,i-5);
 });
  }else if(i%5 == 1){
  	stBtnLi.eq(i).on('click',function(e){
 	t = $(this);
 	btnPrev(t,i);
 });

  }
 }*/

 stBtnLi.eq(5).on('click',function(e){
 	t = $(this);
 	btnNext(t,0);
 });


 stBtnLi.eq(6).on('click',function(e){
 	t = $(this);
 	btnPrev(t,6);
 });


 /*===================*/
/* 
 stBtnLi.eq(5).on('click',function(e){
 	stBtnLi.eq(0).nextUntil($(this)).hide();
 	$(this).hide();
 	$(this).nextUntil((stBtnLi.eq(10+1))).show();
 });
 stBtnLi.eq(10).on('click',function(e){
 	stBtnLi.eq(5).nextUntil($(this)).hide();
 	$(this).hide();
 	$(this).nextUntil((stBtnLi.eq(15+1))).show();
 });
 stBtnLi.eq(6).on('click',function(e){
 	$(this).nextUntil((stBtnLi.eq(-1))).hide();
 	$(this).hide();
 	$(this).prevUntil((stBtnLi.eq(0))).show();
 });


 */
})(jQuery);