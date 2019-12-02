//s3_subLkClick.js

let hrefData;
(function($){
  $('body').append('<script src="../js/src/jquery/sub_common.js"></script>');

  // console.log('???');
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

// ---------------------------------------------------------------------------
  
  let myindex = 0;
  let myview;
  const HrefData = function(){
    hrefData = window.location.href;
    // console.log(hrefData);
    // let i = hrefData.indexOf('.html#');
    myview = hrefData.toString().split('?').pop();
    // console.log(i+6);
    // console.log(myview);
    for(let k = 0 ; k < stLink.length; k++){
    	if(stLink[k] == myview){
    		myindex = k;
    		break;
    	}
    }
  };
// ---------------------------------------------------------------------------
  HrefData();

  viewTheme(myindex);

// ---------------------------------------------------------------------------
  linkBtn.children('a').on('click',function(e){
    e.preventDefault();
		let j = $(this).parent('li').index();
		viewTheme(j);

	});
// ---------------------------------------------------------------------------

})(jQuery);