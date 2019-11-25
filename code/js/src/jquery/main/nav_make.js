//make_nav.js

(function($){
const navMenu = [
 {title: '회사소개',titleLink:'./s1_company.html?cokeBox', 
	sub: [
	// {subN:'코카콜라', subLink:'./s1_company.html?cokeBox'},
	{subN:'글로벌', subLink:'./s1_company.html?globBox'},
	{subN:'코리아', subLink:'./s1_company.html?korBox'},
	{subN:'히스토리', subLink:'./s1_company.html?histBox'},
	{subN:'사회공헌', subLink:'./s1_company.html?sociBox'}]},
 {title: '제품소개', titleLink:'./s2_brand.html',  
	sub: [
	/*{subN:'브랜드',subLink:'./s2_brand.html?mainBrand'},*/
	{subN:'대표제품',subLink:'./s2_brand.html?mainProd'},
	{subN:'전체제품',subLink:'./s2_brand.html?allProd'},
	{subN:'신제품',subLink:'./s2_brand.html?newProd'}]},
 {title: '스토리', titleLink:'#', 
	sub: [
	// {subN:'전체',subLink:'./s3_story.html?allStory'},
	{subN:'코크스토리',subLink:'./s3_story.html?cokeStory'},
	{subN:'글로벌스토리',subLink:'./s3_story.html?globStory'},
	{subN:'코리아스토리',subLink:'./s3_story.html?korStory'},
	{subN:'올림픽&월드컵',subLink:'./s3_story.html?sporStory'},
	{subN:'보도자료',subLink:'./s3_story.html?pressStory'}]},
 {title: '커뮤니티', titleLink:'./s4_sns.html', 
	sub: [
	{subN:'이벤트',subLink:'./s4_sns.html?eventBox'},
	{subN:'고객센터',subLink:'./s4_sns.html?servBox'},
	{subN:'미디어',subLink:'./s4_sns.html?mediaBox'}]}];

const gnb = $('#gnb');
const navSite = $('.nav_site');
const menuLen = navMenu.length;
gnb.children('h2').after('<ul></ul>');
const nav = gnb.children('ul');
nav.addClass('navList');


for(let i = 0; i < menuLen; i++){
 nav.append('<li><dl><dt><a href="#"></a></dt><dd></dd></dl></li>');
 let navLi = nav.children('li').eq(i);
 let dtLk = navLi.find('dt').find('a');
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