// brand_box.js

(function($){
let brand=['coke','sprite','fanta','mini_maid','zico',];

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


// .brand_box.css({width:100* +'%'})

})(jQuery);

/*
다른형식
(function($){
let brand=['coke','sprite','fanta','mini_maid','zico'];

const brand_box = $('.brand_box');
// const brand_box = $('.brand_box');
let brand_li ;
let button;

for (let i=0; i<brand.length; i++){
  brand_box.append('<li>');
  console.log(brand_box.children() );
  brand_li = brand_box.children('li').last();
  brand_li.addClass(brand[i]);
  brand_li.append('<button type="button">'+brand[i]+'</button>');
};
})(jQuery);
*/