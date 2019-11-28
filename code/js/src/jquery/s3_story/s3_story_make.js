//s3_story_make.js

(function($){
	const imgUrl = '../img/event/';
	const stBox = [
		{class:'cokeSport', span:'스포츠', cc:'#fff', bg:'event.png', 
		link:'#',	title:'제목1', 
		contents:'내용1234'},
		{class:'cokeSto', span:'스포츠', cc:'#fff', bg:'event.png', 
		link:'#',	title:'제목2', 
		contents:'내용1234'},
		{class:'cokeGlob', span:'스포츠', cc:'#fff', bg:'event.png', 
		link:'#',	title:'제목3', 
		contents:'내용1234'},
		{class:'cokeKor', span:'스포츠', cc:'#fff', bg:'event.png', 
		link:'#',	title:'제목4', 
		contents:'내용1234'},
		{class:'cokePres', span:'스포츠', cc:'#fff', bg:'event.png', 
		link:'#',	title:'제목5', 
		contents:'내용1234'},
		{class:'cokeGlob', span:'스포츠', cc:'#fff', bg:'event1.png', 
		link:'#',	title:'제목6', 
		contents:'내용1234'},
		{class:'cokeKor', span:'스포츠', cc:'#fff', bg:'event1.png', 
		link:'#',	title:'제목7', 
		contents:'내용1234'},
		{class:'cokePres', span:'스포츠', cc:'#fff', bg:'event1.png', 
		link:'#',	title:'제목8', 
		contents:'내용1234'},
		{class:'cokePres', span:'스포츠', cc:'#fff', bg:'event1.png', 
		link:'#',	title:'제목9', 
		contents:'내용1234'},
		{class:'cokeGlob', span:'스포츠', cc:'#fff', bg:'event1.png', 
		link:'#',	title:'제목10', 
		contents:'내용1234'},
		{class:'cokeKor', span:'스포츠', cc:'#fff', bg:'event1.png', 
		link:'#',	title:'제목11', 
		contents:'내용1234'},
		{class:'cokePres', span:'스포츠', cc:'#fff', bg:'event1.png', 
		link:'#',	title:'제목12', 
		contents:'내용1234'},
		{class:'cokePres', span:'스포츠', cc:'#fff', bg:'event1.png', 
		link:'#',	title:'제목13', 
		contents:'내용1234'},
		{class:'cokePres', span:'스포츠', cc:'#fff', bg:'event1.png', 
		link:'#',	title:'제목14', 
		contents:'내용1234'},
		{class:'cokePres', span:'스포츠', cc:'#fff', bg:'event1.png', 
		link:'#',	title:'제목15', 
		contents:'내용1234'},
		{class:'cokePres', span:'스포츠', cc:'#fff', bg:'event1.png', 
		link:'#',	title:'제목16', 
		contents:'내용1234'},
		{class:'cokePres', span:'스포츠', cc:'#fff', bg:'event1.png', 
		link:'#',	title:'제목17', 
		contents:'내용1234'},
		{class:'cokePres', span:'스포츠', cc:'#fff', bg:'event1.png', 
		link:'#',	title:'제목18', 
		contents:'내용1234'},
		{class:'cokePres', span:'스포츠', cc:'#fff', bg:'event1.png', 
		link:'#',	title:'제목19', 
		contents:'내용1234'},
		{class:'cokePres', span:'스포츠', cc:'#fff', bg:'event1.png', 
		link:'#',	title:'제목20', 
		contents:'내용1234'},
		{class:'cokePres', span:'스포츠', cc:'#fff', bg:'event1.png', 
		link:'#',	title:'제목21', 
		contents:'내용1234'},
		{class:'cokePres', span:'스포츠', cc:'#fff', bg:'event1.png', 
		link:'#',	title:'제목22', 
		contents:'내용1234'},
		{class:'cokePres', span:'스포츠', cc:'#fff', bg:'event1.png', 
		link:'#',	title:'제목23', 
		contents:'내용1234'},
		{class:'cokePres', span:'스포츠', cc:'#fff', bg:'event1.png', 
		link:'#',	title:'제목24', 
		contents:'내용1234'},
		{class:'cokePres', span:'스포츠', cc:'#fff', bg:'event1.png', 
		link:'#',	title:'제목25', 
		contents:'내용1234'},
		{class:'cokePres', span:'스포츠', cc:'#fff', bg:'event1.png', 
		link:'#',	title:'제목26', 
		contents:'내용1234'},
		{class:'cokePres', span:'스포츠', cc:'#fff', bg:'event1.png', 
		link:'#',	title:'제목27', 
		contents:'내용1234'}
	];

 let stLen = stBox.length;
 console.log(stLen);
	const stMake = '<a href="#"><div class="img"><span></span></div><dl class="text"><dt></dt><dd></dd></dl></a>';
 
 const allSt = $('#allStory');
 // const StLi = allSt.find('ul').children('li');

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
 
 let stLi = allSt.find('ul').children('li');
 let stLiLen = stLi.length;
	stLi.hide();

 const numBtn = allSt.find('.numLink');

//=====================================================
 const win = $(window);
 const body = $('body');

 let mobile = 767, pad = 1279, pc = 1919, tv = 1366;
 let nowDevice = null;

 let n = 3, mobN = 3, pcN = 10, myn = 0;

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
			  case 'pad':
				   base = mobN;
			  break;
			  case 'pc': //break;
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

		console.log(stLiArr);

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

	for(let b=0; b<((stLen/base)-1) ;b++){
 	numBtn.append('<li><button type="button">'+(b+1)+'</button></li>');
 }
 	numBtn.prepend('<li><button type="button">처음</button></li>');
 	numBtn.append('<li><button type="button">끝</button></li>');

 const stBtn = numBtn.find('button');
 stBtn.eq(0).hide();
 stBtn.on('click',function(e){
  	myn = $(this).parent().index();
  	MyLishow(myn);
  	stBtn.eq(0).show();
	});

})(jQuery);