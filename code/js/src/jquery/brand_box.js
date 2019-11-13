// brand_box.js

(function($){
let imgUrl="../img/main_logo/"
let brand=[
{title: 'coke', titleLink:'#brandBox', img:'logo_01.jpg'},
{title: 'sprite', titleLink:'#brandBox', img:'logo_02.jpg'},
{title: 'fanta', titleLink:'#brandBox', img:'logo_03.jpg'},
{title: 'mini_maid', titleLink:'#brandBox', img:'logo_04.jpg'},
{title: 'power_ade', titleLink:'#brandBox', img:'logo_05.jpg'},
{title: 'toreta', titleLink:'#brandBox', img:'logo_06.jpg'},
{title: 'georgia', titleLink:'#brandBox', img:'logo_07.jpg'},
{title: 'matecha', titleLink:'#brandBox', img:'logo_08.jpg'},
{title: 'seagrams', titleLink:'#brandBox', img:'logo_09.jpg'}
];

const brand_box = $('.brand_box');

let brand_li ;
let button;
// let icon;
for (let i=0; i<brand.length; i++){
  brand_box.append('<li>');
  // console.log(brand_box.children() );
  brand_li = brand_box.children('li').last();
  brand_li.addClass(brand[i].title);
  brand_li.append('<a href="#"></a>');
  liLink = brand_li.children('a');
  liLink.prepend('<i class="fas fa-plus">');
  liLink.attr('href',brand[i].titleLink)
  brand_li.css({backgroundImage:`url(${imgUrl}${brand[i].img})`})
}

brand_box.css({width: 240 * brand.length + 40 +'px'});
let brLi = brand_box.find('li');
let brLilenHarf = Math.floor(brLi.length / 2);
brLi.addClass('action');
//console.log(brLilenHarf);
brLi.eq(brLilenHarf).css({transform:'scale(1.3)', margin: '0 40px',opacity:1});
brLi.eq(brLilenHarf).removeClass('action');
brLi.eq(brLilenHarf).children('a').css({transform:'scale(0.8)'});
})(jQuery); 

