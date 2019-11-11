//main_comp.js

(function($){
 const company = $('.company_area');
 const compLink = company.find('a');

 compLink.on('mouseenter focus',function(e){
  $(this).parents('li').siblings().find('a').removeClass('act');
  $(this).addClass('act');
 });
 compLink.on('mouseleave blur', function(e){
  $(this).removeClass('act');
 });

})(jQuery);