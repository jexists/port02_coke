//nav_pc.js
(function($){
const gnb = $('#gnb');
const headBox = $('#headBox');
const nav = gnb.children('ul');
const navLi = nav.children('li');
const navDl = nav.find('dl');
const navDt = navDl.children('dt');
const dtLk = navDt.children('a');
const navDd = navDl.children('dd');
const ddLk = navDd.children('a');
const openSearch = gnb.find('.search_open');
const closeSearch = gnb.find('.search_close');
const searchBox = gnb.find('.search_box');
const rotate = {transition: 'all 500ms ease', transform:'rotate(360deg)'};
const rotateZero = {transform:'rotate(0deg)'};
const scale = {transition: 'all 500ms ease', transform:'scale(1.2)'};
const scaleZero = {transition: 'all 500ms ease', transform:'scale(1)'};

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
	openSearch.css(scaleZero);
	searchBox.stop().slideUp();
	$(this).css(rotateZero);
	$(this).stop().fadeOut(function(){
	$(this).css(rotate);
		openSearch.stop().fadeIn();
	});
});	
	});
})(jQuery);