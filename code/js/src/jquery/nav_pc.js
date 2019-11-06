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

 	nav.on('mouseenter',function(){
		navDd.stop().slideDown();
		$(this).closest(headBox).addClass('act');
	});

	nav.on('mouseleave',function(){
		navDd.stop().slideUp();
		$(this).closest(headBox).removeClass('act');
	});

let gnbContents = nav.contents().clone();
	navSite.append('<ul class="btn_nav"></ul>');
	navSite.children('ul').append(gnbContents)
	

/*
	const openGnBtn = $('#gnb_btn>button');
	const closeGnBtn = $('.close_gnb_btn>button');
	const sideGnb = $('.side_gnb'); //나타내기
	const gnbDl = gnb.find('dl');
	const gnbDd = gnb.find('dd'); 
	const gnbDt = gnb.find('dt');
	const gnbTitleLink = gnbDt.children('a');
	const gnbListLink = gnbDd.children('a');


	const addAction = function(){
		let li = $(this).parents('li');
		li.find(gnbTitleLink).addClass('action');
		li.siblings().find(gnbTitleLink).removeClass('action');
		gnbDd.stop().slideDown();}
	const removeAction = function(){
		$(this).parents('li').find(gnbTitleLink).removeClass('action');
		gnbDd.stop().slideUp();}

	let time = 600;

	let gnbContents = gnb.contents().clone();
	sideGnbArea.append(gnbContents);


	openGnBtn.on('click',function(e){
		e.preventDefault();

		sideGnb.stop().fadeIn(time,function(){
			closeGnBtn.focus();
			$(this).on('keyup',function(e){
				if(e.keyCode == 27)
					{sideGnb.stop().fadeOut();
					openGnBtn.focus()}
					console.log(e.key.toLowerCase());

			});
		});
	});

	closeGnBtn.on('click',function(e){
		e.preventDefault();
		sideGnb.stop().fadeOut(time*2);

	});


	gnbDl.on ({'mouseenter':addAction,'mouseleave':removeAction})

	gnbTitleLink.on('focus',addAction);

	gnbListLink.eq(-1).on('blur', function(){
		gnbDd.stop().slideUp();	
	});

const sideLink = sideGnbArea.find('a');
const sideLastLink = sideLink.eq(-1);

	sideLastLink.on('blur',function(e){
		closeGnBtn.focus();
	});

sideGnbArea.on('keyup',function(e){
	console.log(e);

});
*/



})(jQuery);