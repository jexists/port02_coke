// boxMake.js

(function($){
const	Imgurl = '../img/brand_make/';
const brBox = [
	{logo: 'coke_logo.png', brand: '코카콜라', pic:'coke_prod.png', link:'#',
		text:'언제 어디서나 이 맛, 이느낌!', bgc:'#c3121f'},
	{logo: 'sprite_logo.png', brand: '스프라이트', pic:'sprite_prod.png', link:'#',
		text:'상쾌하게 통한다!', bgc:'#009639'},
	{logo: 'fanta_logo.png', brand: '환타', pic:'fanta_prod.png', link:'#',
		text:'마지막 한 방울까지 놓칠 수 없는 맛!', bgc:'#ff8201'},
	{logo: 'maid_logo.png', brand: '미닛메이드', pic:'maid_prod.png', link:'#',
		text:'자연을 담다!', bgc:'#b3df30'},
	{logo: 'power_logo.png', brand: '파워에이드', pic:'power_prod.png', link:'#',
		text:'파워의 끝에서 파워가 시작된다!', bgc:'#009ed5'},	
	{logo: 'mate_logo.png', brand: '태양의 마테차', pic:'mate_prod.png', link:'#',
		text:'먹고, 마시고, 즐겨라!', bgc:'#ec3426'},	
	{logo: 'seag_logo.png', brand: '씨그램', pic:'seag_prod.png', link:'#',
		text:'마지막까지 톡~쏘는 상쾌함!', bgc:'#123c18'},
	{logo: 'georgia_logo.png', brand: '조지아', pic:'georgia_prod.png', link:'#',
		text:'좋은 커피는 향으로 말한다!', bgc:'#916e47'},
	{logo: 'toreta_logo.png', brand: '토레타', pic:'toreta_prod.png', link:'#',
		text:'목마를 때 토레타! 니가 있어 좋타!', bgc:'#b0dd5d'}];
const brandUl = $('#mainBrand').children('ul');
const boxLen = brBox.length;
const boxMake = '<a href="#"><dl><dt></dt><dd class="prod"><span class="hd"></span></dd><dd class="text"></dd></dl></a>';

//console.log(brBox[0].bgc);
//console.log(boxLen)
for(let i=0; i<boxLen ;i++){
	brandUl.append('<li></li>');
	let brandLi = brandUl.children('li').eq(i);
	brandLi.append(boxMake);
	brandLi.children('a').attr('href', brBox[i].link);
	brandLi.find('dl').css({backgroundColor:`rgba(${brBox[i].bgc}, 1)`});
	brandLi.find('dt').css({backgroundImage:'url('+Imgurl+brBox[i].logo+')'});
	brandLi.find('dd.prod').css({backgroundImage:'url('+Imgurl+brBox[i].pic+')'});
	brandLi.find('dd.prod').children('span').text(brBox[i].brand);
	brandLi.find('dd.text').text(brBox[i].text);
	//brandLi.find('dd.text').css({backgroundColor:'rgba('+ brBox[i].bgc+',0.1)'});

}
const moreBtn = $('#mainBrand').find('button');

let n = 3;
let brLi = brandUl.children('li');
let brLiLength = brLi.length;
console.log(brLiLength);

brLi.hide()
const show = function(l){
	for (let m=0; m<l; m++){
		brLi.eq(m).show();
		/*brLi.eq(m).addClass('show');*/}
}
show(n+=3);

moreBtn.on('click',function(e){
	//e.preventDefault();
	show(n+=3);
	/*if(brLi.eq(-1).hasClass('show')){
	moreBtn.hide();
	brandUl.css({marginBottom:'80px'})}*/
	if(brLiLength <= n){
	  moreBtn.hide();
	  brandUl.css({marginBottom:'80px'})
	}
});
const brLink = brLi.children('a');
brLink.on('mouseenter focus',function(e){
	e.preventDefault();
	$(this).addClass('act');
});

brLink.on('mouseleave blur',function(){
	$(this).removeClass('act');
});



})(jQuery);