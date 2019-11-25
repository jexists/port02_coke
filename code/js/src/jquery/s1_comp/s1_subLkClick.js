//s1_subLkClick.js

let hrefData;
(function($){
  $('body').append('<script src="../js/src/jquery/sub_common.js"></script>');

  console.log('???');
	const bussLink = ['cokeBox', 'globBox', 'korBox', 'histBox', 'sociBox'];

	const linkBtn = $('.bussLink').find('li');
// ---------------------------------------------------------------------------
  const viewTheme = function(j){
  for(let i=0; i<bussLink.length; i++){
        $('#'+bussLink[i]).hide();
      }
  linkBtn.eq(j).siblings().removeClass('action');
  linkBtn.eq(j).addClass('action');
  $('#'+bussLink[j]).show();
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
    console.log(myview);
    for(let k = 0 ; k < bussLink.length; k++){
    	if(bussLink[k] == myview){
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