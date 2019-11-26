//s4_subLkClick.js

let hrefData;
(function($){
  const body = $('body');
  const wrap = $('#wrap');
  body.append('<script src="../js/src/jquery/sub_common.js"></script>');

  const servBox = $('#servBox');
  const JsLink = (temp) => {
    return body.append(`<script src="../js/src/jquery/temp/${temp}.js"></script>`);
  };

  servBox.load('./src/service.html',function(){
  });

  //console.log('???');
	const snsLink = ['eventBox', 'servBox', 'mediaBox'];

	const linkBtn = $('.snsLink').find('li');
// ---------------------------------------------------------------------------
  const viewTheme = function(j){
  for(let i=0; i<snsLink.length; i++){
        $('#'+snsLink[i]).hide();
      }
  linkBtn.eq(j).siblings().removeClass('action');
  linkBtn.eq(j).addClass('action');
  $('#'+snsLink[j]).show();
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
    //console.log(myview);
    for(let k = 0 ; k < snsLink.length; k++){
    	if(snsLink[k] == myview){
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