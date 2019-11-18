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

let NavUp = function(t){
	navDd.stop().slideUp();
	navDt.removeClass('act');
	t.closest(headBox).removeClass('act');
};
let NavDown = function(t){
	navDd.stop().slideDown();
	t.parents('li').siblings().find('dt').removeClass('act');
	t.parents('li').find('dt').addClass('act');
	t.closest(headBox).addClass('act');
};

nav.on('mouseenter',function(){
	NavDown($(this));
});

ddLk.on('mouseenter',function(){
	$(this).parents('li').siblings().find('dt').removeClass('act');
	$(this).parents('li').find('dt').addClass('act');
});

nav.on('mouseleave',function(){
	NavUp($(this));
});


dtLk.on('focus',function(){
	NavDown($(this));
 ddLk.eq(-1).on('blur',function(){
 	NavUp($(this));
 });
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