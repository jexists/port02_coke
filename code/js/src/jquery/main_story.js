//main_story.js

(function($){
 
 const story = [
 	{title:'코크스토리',
	 	contents:[
	 	{cont:'story_01.png',con1Link:'#'},
	 	{cont:'story_02.png',con1Link:'#'},
	 	{cont:'story_03.png',con1Link:'#'}]},
 	{title:'글로벌스토리',
	 	contents:[
	 	{cont:'story_04.png',con1Link:'#'},
	 	{cont:'story_05.png',con1Link:'#'},
	 	{cont:'story_01.png',con1Link:'#'}]},
 	{title:'코리아스토리',
	 	contents:[
	 	{cont:'story_02.png',con1Link:'#'},
	 	{cont:'story_01.png',con1Link:'#'},
	 	{cont:'story_03.png',con1Link:'#'}]},
 	{title:'올림픽 월드컵',
	 	contents:[
	 	{cont:'story_05.png',con1Link:'#'},
	 	{cont:'story_02.png',con1Link:'#'},
	 	{cont:'story_01.png',con1Link:'#'}]},
 	{title:'보도자료',
	 	contents:[
	 	{cont:'story_02.png',con1Link:'#'},
	 	{cont:'story_03.png',con1Link:'#'},
	 	{cont:'story_05.png',con1Link:'#'}]}];

 const storyBox = $('#storyBox');
 const linkUl = storyBox.find('ul.story_link');
 const linkLi = linkUl.children('li');
 const linkA = linkLi.children('a');

 const contWrap = storyBox.find('.cs_wrap');

// console.log(story.length);
// console.log(story[1].contents[1].cont);
// console.log(story[4].contents[0].cont1);
/*console.log(story[0].title);
console.log(story[0].contents);
console.log(story[0].contents[0]);
console.log(story[0].contents[0].cont1);
console.log(story[0].contents[0].con1Link);*/

 let imgUrl = '../img/main_story/';

for(let i=0; i < story.length ;i++){
	contWrap.append('<dl><dt></dt><dd><a herf="#"></a></dd><dd><a herf="#"></a></dd><dd><a herf="#"></a></dd></dl>');
	const contDl = contWrap.children('dl');
	const contDt = contDl.children('dt');
	contDt.eq(i).text(story[i].title);
 	// contDt.eq(i).nextAll('dd').css({backgroundImage: 'url('+imgUrl+story[i].contents[0].cont1 +')'});
  for(let j = 0; j < story[i].contents.length; j++){
  	contDl.eq(i).children('dd').eq(j).css({backgroundImage:'url('+imgUrl+story[i].contents[j].cont +')'});
  }
} //for문

const contDl = contWrap.children('dl');
const contDt = contDl.children('dt');
const contDd = contDl.children('dd');
const ddLink = contDd.children('a');

contDl.addClass('cf');
contDl.eq(0).siblings().hide();
linkLi.eq(0).addClass('action');

linkA.on('click',function(e){
	e.preventDefault();
	let storyi = $(this).parent('li').index();
	// console.log(storyi);
	$(this).parent('li').siblings().removeClass('action');
	$(this).parent('li').addClass('action');
	contDl.eq(storyi).siblings().hide();
	contDl.eq(storyi).show();
});
/*
&>dd:nth-of-type(1){background: url($url + 'main_story/story_01.png') no-repeat 50% 50% / 100% auto;}
*/
})(jQuery);