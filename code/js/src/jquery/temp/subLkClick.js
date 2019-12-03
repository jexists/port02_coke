//subLkClick.js
let hrefData;
(function($){
	const bussLink = ['cokeBox', 'globBox', 'korBox', 'histBox', 'sociBox'];

	const linkBtn = $('.bussLink').find('li');
  hrefData = window.location.href;
  // console.log(hrefData);
  // let i = hrefData.indexOf('.html#');
  let myview = hrefData.toString().split('#').pop();
  // console.log(i+6);
  console.log(myview);
  let myindex = 0;
  for(let k = 0 ; k < bussLink.length; k++){
  	if(bussLink[k] == myview){
  		myindex = k;
  		break;
  	}
  }

 const viewTheme = function(j){
	for(let i=0; i<bussLink.length; i++){
				$('#'+bussLink[i]).hide();
			}
	linkBtn.eq(j).siblings().removeClass('action');
	linkBtn.eq(j).addClass('action');
	$('#'+bussLink[j]).show();
 };
viewTheme(myindex);

	linkBtn.children('a').on('click',function(e){
		let j = $(this).parent('li').index();
		viewTheme(j);
	});


})(jQuery);

/*

const stLink = ['allStory', 'cokeStory', 'globStory', 'korStory', 'sporStory', 'pressStory'];

const linkBtn = $('.stLink').find('li');
// ---------------------------------------------------------------------------
  const viewTheme = function(j){
  for(let i=0; i<stLink.length; i++){ $('#'+stLink[i]).hide(); }
    linkBtn.eq(j).siblings().removeClass('action');
    linkBtn.eq(j).addClass('action');
    if(j == 0){
      $('#'+stLink[j]).show();
    }else{
      $('#'+stLink[j]).show();
      let tabBox = $('#'+stLink[j]).children('ul');
      tabBox.empty();
      $('#allStory').find('.'+ stLink[j]).clone(true).appendTo(tabBox);
      tabBox.children().show();
    }
  };










//subLkClick.js

(function($){
	const bussLink = ['#cokeBox', '#globBox', '#korBox', '#histBox', '#sociBox'];

	const linkBtn = $('.bussLink').find('li');

	linkBtn.children('a').on('click',function(e){
		let j = $(this).parent('li').index();
    let href = window.location.href;
    console.log(href);
    
		for(let i=0; i<bussLink.length; i++){
			$(bussLink[i]).hide();
		}
			linkBtn.eq(j).siblings().removeClass('action');
			linkBtn.eq(j).addClass('action');
			$(bussLink[j]).show();
	});
})(jQuery);


*/