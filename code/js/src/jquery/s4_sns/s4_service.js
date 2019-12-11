//service.js

(function($){

const allCheck = $('#allCheck');
const cbSel = $('.cb_sel');
let ck;

allCheck.on('click',function(e){
	ck = $(this).is(':checked');
	if(ck){
		cbSel.attr('checked',true);
		cbSel.prop('checked',true);
		allCheck.prop('checked',true);
		allCheck.attr('checked',true);
	}else{
		cbSel.attr('checked',false);
		cbSel.prop('checked',false);
		allCheck.prop('checked',false);
		allCheck.attr('checked',false);
	}
});

cbSel.on('click',function(){

	let idCheck = $(this).attr('id');
	let idN = $('#' + idCheck);
	let idnIs = idN.is(':checked');
	( idnIs ) ? idN.attr('checked',true).prop('checked',true) :	idN.attr('checked',false).prop('checked',false);

	for(let i = 0; i<cbSel.length; i++){
		ck = cbSel.eq(i).is(':checked');
		if(ck){ 
			allCheck.prop('checked',true).attr('checked',true);
		}else{
			allCheck.prop('checked',false).attr('checked',false); 
			break;
		}
	}
	});

 const subBtn = $('.cs_submit');
 const reqChk = $('#req_cirti_01');
 let reqPro;
 
 let csInput = $('.cs_input');
 let csLeng = csInput.length;
 //console.log(csLeng);
 const csInputBox = [];
 const allInput = $('.all_input');

let myState = false;
const arrCk = function(){
 for(let p=0; p<csLeng-2; p++){
 	csInputBox[p] = allInput.children('li').eq(p).find(csInput).val();
 	console.log(csInputBox[p].length);
 }

 for(let p=0; p<csLeng-2; p++){
	if(csInputBox[p].length == 0){
		myState = true;
		break;
	}else{
		myState = false;
	}
 }
	console.log('!!!', myState);
 	return myState;
};

 subBtn.on('click',function(){
  reqPro = reqChk.is(':checked');
  arrCk();
 	//console.log(reqPro)
 	if(csInput.closest('li').hasClass('error')/* || $('.cs_input').text() == ""*/){
 		alert('코카콜라 고객센터 문의를 적어주세요.');
 	}else if( myState ){
 		alert('코카콜라 고객센터 문의를 다시 적어주세요.');
 		csInput.closest('li').addClass('error')
 	}else if(!reqPro){
 		alert('코카콜라 필수약관에 동의해주세요.')
 	}else{
 		alert('고객센터 메세지가 전송이 되었습니다.');
 		window.location = "./main.html";
 	}
 })   

/*고객센터 글작성========*/
let checkPw = /^(?=.*[a-zA-Z])(?=.*^[a-zA-Z0-9].*[0-9]).{6,15}$/;
let emailCheck = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
let numCk1 = /^(?=0)[0-9]{2,3}$/;
let numCk2 = /^[0-9]{3,4}$/;
let numCk3 = /^[0-9]{4}$/;
	
	csInput.on('blur',function(){
		let thisVal = $(this).val();
		if(thisVal == ""){
			$(this).closest('li').addClass('error');
		}
	});
	csInput.on('keyup',function(){
		let thisVal = $(this).val();
		if(!thisVal == ""){
			$(this).closest('li').removeClass('error');
		}
	});

	$('textarea').on('blur',function(){
		let thisVal = $(this).val();
		if(thisVal == ""){
			$(this).closest('li').addClass('error');
		}
	});
	$('textarea').on('keyup',function(){
		let thisVal = $(this).val();
		if(!thisVal == ""){
			$(this).closest('li').removeClass('error');
		}
	});
const userId = $('#userId');
	userId.on('blur',function(){
		let thisLi = $(this).closest('li');
		let thisVal = $(this).val();
		if(thisVal == ""){
			$(this).closest('li').addClass('error');
		}else if(!emailCheck.test(thisVal)){
			thisLi.addClass('error');
			thisLi.find('.narr').text('이메일형식에 맞게 내용을 입력하세요.')
		}else{
			thisLi.removeClass('error');
		}
	});

	const userTel1 = $('#userTel1');
	const userTel2 = $('#userTel2');
	const userTel3 = $('#userTel3');
	let ut1, ut2, ut3;

	userTel1.on('blur',function(){
		let thisLi = $(this).closest('li');
		let thisVal = $(this).val();
		ut1 = thisVal;
		
	/*	if(thisVal == ""){
			$(this).closest('li').addClass('error');
		}else */if(!numCk1.test(thisVal)){
			thisLi.addClass('error');
			thisLi.find('.narr').text('첫번째 번호를 입력하세요.');
		}else if( !numCk2.test(ut2) || !numCk3.test(ut3) ){
			thisLi.addClass('error');
			thisLi.find('.narr').text('내용을 모두 입력하세요.');
		}else{
			thisLi.removeClass('error');
		}
	});

	userTel2.on('blur', function(){
		let thisLi = $(this).closest('li');
		let thisVal = $(this).val();
		ut2 = thisVal;

		if(thisVal == ""){
			$(this).closest('li').addClass('error');
		}else if(!numCk2.test(thisVal)){
			thisLi.addClass('error');
			thisLi.find('.narr').text('가운데 번호를 입력하세요.');
		}else if( !numCk1.test(ut1) || !numCk2.test(ut2) ){
			thisLi.addClass('error');
			thisLi.find('.narr').text('내용을 모두 입력하세요.');
		}else{
			thisLi.removeClass('error');
		}
	});

	userTel3.on('blur',function(){
		let thisLi = $(this).closest('li');
		let thisVal = $(this).val();
		ut3 = thisVal;
		if(thisVal == ""){
			$(this).closest('li').addClass('error');
		}else if(!numCk3.test(thisVal)){
			thisLi.addClass('error');
			thisLi.find('.narr').text('끝 번호를 입력하세요.');
		}else if( !numCk1.test(ut1) || !numCk2.test(ut2) || !numCk3.test(ut3) ){
			thisLi.addClass('error');
			thisLi.find('.narr').text('내용을 모두 입력하세요.');
		}else{
			thisLi.removeClass('error');
		}
		/*if(thisLi.hasClass('error')){thisLi.addClass('error')}*/
	});

	const userPw = $('#userPw');
	const userPwRe = $('#userPwc');

	let beforePwVal, afterPwVal;

	userPw.on('focus',function(){
		$(this).val("");
		userPwRe.val("");
	});

	userPw.on('blur',function(){
		beforePwVal = userPw.val();
		let thisVal = $(this).val();
		let thisLi = $(this).closest('li');
		if(thisVal == ""){
			thisLi.addClass('error');
			thisLi.find('.narr').text('비밀번호 입력하세요.')
		}if(thisVal.length <= 5){
			thisLi.addClass('error');
			thisLi.find('.narr').text('비밀번호는 6~15자 이내입니다.')
		}else if(!checkPw.test(thisVal)){
			thisLi.addClass('error');
			thisLi.find('.narr').text('영문 숫자 혼용하여 사용하세요.')
		}else{
			thisLi.removeClass('error')
		}
	});

	userPwRe.on('keyup',function(){
		afterPwVal = userPwRe.val();
		if(beforePwVal !== afterPwVal){
			$(this).closest('li').addClass('error');
		}else{
			$(this).closest('li').removeClass('error');
		}
	});

	const pwlabel = $('label[for="userPw"]');

	pwlabel.on('mousedown',function(e){
		//console.log(e.which);
		if(e.which==1){
			userPw.attr({type:'text'});
		}
	});
	pwlabel.on('mouseup keyup mousemove',function(e){
		userPw.attr({type:'password'});
	});


})(jQuery)