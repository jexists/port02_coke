//make_nav.js

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
const navSite = $('.nav_site');
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
 	ddLk.attr('href',navMenu[i].sub[j].subLink); }}
	
//const navLi = nav.children('li');
//const navDl = navLi.children('dl');
//const navDt = navDl.children('dt');
//const dtLk = navDt.children('a');
//const navDd = navDl.children('dd');
//const ddLk = navDd.children('a');

let gnbContents = nav.contents().clone();
		navSite.append('<ul class="btn_nav"></ul>');
		navSite.children('ul').append(gnbContents);

})(jQuery);