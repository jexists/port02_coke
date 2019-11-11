// brand_box.js

(function($){
let brand=['coke','sprite','fanta','mini_maid','zico','zico','zico','zico','zico','zico','zico'];

const brand_box = $('.brand_box');

let brand_li ;
let button;
// let icon;
for (let i=0; i<brand.length; i++){
  brand_box.append('<li>');
  // console.log(brand_box.children() );
  brand_li = brand_box.children('li').last();
  brand_li.addClass(brand[i]);
  brand_li.append('<button type="button">');
  button = brand_li.children('button');
  button.prepend('<i class="fas fa-plus">');
}


brand_box.css({width: 240 * brand.length + 40 +'px'});
let brLi = brand_box.find('li');
let brLilenHarf = Math.floor(brLi.length / 2);
//console.log(brLilenHarf);
brLi.eq(brLilenHarf).css({transform:'scale(1.3)', margin: '0 40px'})
})(jQuery); 

