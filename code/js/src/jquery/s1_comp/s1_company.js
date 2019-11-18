//s1_company.js

(function($){
	const body = $('body');
	const wrap = $('#wrap');
	const headBox = $('#headBox');
	const footBox = $('#footBox');

	const JsLink = (temp) => {
		return body.append(`<script src="../js/src/jquery/temp/${temp}.js"></script>`);
	};

	headBox.load('./src/header.html',function(){
		JsLink('nav_make');
		JsLink('nav_pc');
		JsLink('burgur_btn');
		JsLink('rwd');
	});
	footBox.load('./src/footer.html');


})(jQuery);