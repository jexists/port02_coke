// nav_pc.js

(function($){
const navMenu = [
 {title: '회사소개',titleLink:'#', 
	sub: [
	{subN:'코카콜라', subLink:'#'},
	{subN:'글로벌', subLink:'#'},
	{subN:'코리아', subLink:'#'},
	{subN:'히스토리', subLink:'#'},
	{subN:'사회공헌', subLink:'#'}]},
 {title: '제품소개', titleLink:'#',  
	sub: [
	{subN:'대표제품',subLink:"#"},
	{subN:'전체제품',subLink:"#"}]},
 {title: '스토리', titleLink:'#', 
	sub: [
	{subN:'코크스토리',subLink:"#"},
	{subN:'글로벌스토리',subLink:"#"},
	{subN:'코리아스토리',subLink:"#"},
	{subN:'올림픽&월드컵',subLink:"#"},
	{subN:'보도자료',subLink:"#"}]},
 {title: '커뮤니티', titleLink:'#', 
	sub: [
	{subN:'이벤트',subLink:"#"},
	{subN:'고객센터',subLink:"#"},
	{subN:'사진&영상',subLink:"#"},
	{subN:'SNS',subLink:"#"}]}];

const gnb = $('#gnb');
const navSite = $('.nav_site')
const menuLen = navMenu.length;
gnb.children('h2').after('<ul></ul>');
const nav = gnb.children('ul');
nav.addClass('navList');

for(let i = 0; i < menuLen; i++){
 nav.append('<li><dl><dt><a href="#"></a></dt><dd></dd></dl></li>');
 let navLi = nav.children('li').eq(i);
 let dtLk = navLi.find('dt').children('a');
 dtLk.text(navMenu[i].title);
 dtLk.attr('href',navMenu[i].titleLink);

 let subLen = navMenu[i].sub.length;
 for (let j=0; j<subLen; j++){
 	let navDd = navLi.find('dd');
 	navDd.append('<a href="#"></a>');
 	let ddLk = navDd.children('a').eq(j);
 	ddLk.text(navMenu[i].sub[j].subN);
 	ddLk.attr('href',navMenu[i].sub[j].subLink) }}
	
const navLi = nav.children('li');
const navDl = navLi.children('dl');
const navDt = navDl.children('dt');
const dtLk = navDt.children('a');
const navDd = navDl.children('dd');
const ddLk = navDd.children('a');

let gnbContents = nav.contents().clone();
		navSite.append('<ul class="btn_nav"></ul>');
		navSite.children('ul').append(gnbContents)

const PcView = function(){

	 	nav.on('mouseenter',function(){
			navDd.stop().slideDown();
			$(this).closest(headBox).addClass('act');
		});

		nav.on('mouseleave',function(){
			navDd.stop().slideUp();
			$(this).closest(headBox).removeClass('act');
		});

		dtLk.on('focus',function(){
			navDd.stop().slideDown();
			$(this).closest(headBox).addClass('act');
		});		

	 const openSearch = gnb.find('.search_open');
	 const closeSearch = gnb.find('.search_close');
	 const searchBox = gnb.find('.search_box');


	 const rotate = {transition: 'all 500ms ease', transform:'rotate(360deg)'};
	 const rotateZero = {transform:'rotate(0deg)'};
	 const scale = {transition: 'all 500ms ease', transform:'scale(1.2)'};
	 const scaleZero = {transition: 'all 500ms ease', transform:'scale(1)'};
	openSearch.on('click',function(e){
		e.preventDefault();
		$(this).css(scale);
		closeSearch.css(rotateZero);
		$(this).stop().fadeOut(function(){
			closeSearch.stop().fadeIn();
			closeSearch.css(rotate);
			searchBox.stop().slideDown();
		});
	closeSearch.on('click',function(e){
		e.preventDefault();
		openSearch.css(scaleZero)
		searchBox.stop().slideUp();
		$(this).css(rotateZero);
		$(this).stop().fadeOut(function(){
		$(this).css(rotate);
			openSearch.stop().fadeIn();
		});
	});	
	});
}; 


// =================================================================================================
//모바일 480px~767px (280) & 패드 768px~1279px 
const TabView = function(){
/*	 const openI = $('.open_btn')
   const openBtn = openI.find('button');
   const openspan = openBtn.find('span.burgur');
   const allGnb = $('.all_gnb');
   const closeI = $('.close_btn');
   const closeBtn = closeI.find('button');;
   const closespan = closeBtn.find('span.burgur');

   const rotate = {transition: 'all 500ms ease', transform:'rotate(360deg)'};
	 const rotateZero = {transform:'rotate(0)'};
  
  openBtn.on('click focus',function(e){
  	e.preventDefault();
   	openspan.addClass('act');
   	allGnb.stop().fadeIn(1000);
   	openI.stop().fadeOut();
   	closespan.addClass('act');
   });
  closeBtn.on('click', function(e){
  	e.preventDefault();
  	closeI.css(rotate);
  	allGnb.delay(500).stop().fadeOut(function(){
	  	closeI.removeAttr('style');
  	});
  	openBtn.stop().fadeIn();
  	openspan.removeClass('act');
  });*/

}

// =================================================================================================
let beforeWw = $(window).outerWidth();

const browserWidth = function(after){
	// let pcWidth = $(window).outerWidth();
	if(beforeWw > 1279){
		PcView();
	}else{
		TabView();
	}
}
browserWidth();
// =================================================================================================
// 브라우저 크기 변경시
$(window).on('resize', function(){
	// widthcheck();
 let afterWw = $(window).outerWidth();
	 if(beforeWw !== afterWw){
	 	location.reload();
	 }
});


})(jQuery);