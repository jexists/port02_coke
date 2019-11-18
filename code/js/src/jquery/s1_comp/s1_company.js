//s1_company.js

(function($){
	const body = $('body');
	const wrap = $('#wrap');
	const headBox = $('#headBox');
	const footBox = $('#footBox');

	const JsLink = (temp) => {
		return body.append(`<script src="../js/src/jquery/temp/${temp}.js"></script>`);
	};

	headBox.load('./src/header.html');
	footBox.load('./src/footer.html');

	
/*	body.append('<script src="../js/src/jquery/temp/nav_make.js"></script>');
	body.append('<script src="../js/src/jquery/temp/nav_pc.js"></script>');
	body.append('<script src="../js/src/jquery/temp/burgur_btn.js"></script>');
	body.append('<script src="../js/src/jquery/temp/rwd.js"></script>');*/
	/*JsLink('nav_make');*/
/*	JsLink('nav_pc');
	JsLink('burgur_btn');
	JsLink('rwd');*/

/*
<script src="../js/src/jquery/nav_make.js"></script>
<script src="../js/src/jquery/rwd.js"></script>
<script src="../js/src/jquery/main_slide.js"></script>
*/


})(jQuery);