// boxMake.js

(function($){
const	Imgurl = '../img/brand_make/';
const brBox = [
	{logo: 'coke_logo.png', brand: '코카콜라', pic:'coke_prod.png', link:'#',
		text:'언제 어디서나 이 맛, 이느낌!', bgc:'#f00'},
	{logo: 'coke_logo.png', brand: '스프라이트', pic:'coke_prod.png', link:'#',
		text:'상쾌하게 통한다!', bgc:'#f00'},
	{logo: 'coke_logo.png', brand: '환타', pic:'coke_prod.png', link:'#',
		text:'마지막 한 방울까지 놓칠 수 없는 환상의 맛
		', bgc:'#f00'},
	{logo: 'coke_logo.png', brand: '코카콜라', pic:'coke_prod.png', link:'#',
		text:'언제 어디서나 이 맛, 이느낌!', bgc:'#f00'},
	{logo: 'coke_logo.png', brand: '코카콜라', pic:'coke_prod.png', link:'#',
		text:'언제 어디서나 이 맛, 이느낌!', bgc:'#f00'},
	{logo: 'coke_logo.png', brand: '코카콜라', pic:'coke_prod.png', link:'#',
		text:'언제 어디서나 이 맛, 이느낌!', bgc:'#f00'},
	{logo: 'coke_logo.png', brand: '코카콜라', pic:'coke_prod.png', link:'#',
		text:'언제 어디서나 이 맛, 이느낌!', bgc:'#f00'},
	{logo: 'coke_logo.png', brand: '코카콜라', pic:'coke_prod.png', link:'#',
		text:'언제 어디서나 이 맛, 이느낌!', bgc:'#f00'},
	{logo: 'coke_logo.png', brand: '코카콜라', pic:'coke_prod.png', link:'#',
		text:'언제 어디서나 이 맛, 이느낌!', bgc:'#f00'}];
const brandUl = $('#mainBrand').children('ul');
const boxLen = brBox.length;
const boxMake = '<a href="#"><dl><dt></dt><dd class="prod"><span class="hd"></span></dd><dd class="text"></dd></dl></a>';

console.log(brBox[0].bgc);
console.log(boxLen)
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



/*

    <section id="mainBrand">
      <ul class="cf">
        <li>
        a >dl >dt+dd+dd
					dl
					dt a
					dd
        </li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <button>더보기</button>
*/
})(jQuery);