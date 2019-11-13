//main_bg.js

(function($){
const bubble_wrap = $('.move_bubble')
const bubble = $('.bub')

i=0;
for(let i=1; i<=100 ;i++){
	if(i<10){i="0"+i}
	 let a = Math.random()*100;
	 let b = Math.round(a);
	 // console.log(b)
	bubble_wrap.append('<div class="bub bub_'+ i +'"></div>');
	// bubble_wrap.children('div').eq(i).css({left:b+'px', width:b+'px',height:b+'px',animation:'bubble 9s ease-in infinite'})
}
// for(let i=0; i<=100 ;i++){
// 	 let a = Math.random()*100;
// 	 let b = Math.round(a);
// 	 console.log(b)
// }
let b=0;
const r = function(n){
	 let a = Math.random()*n;
	 b = Math.floor(a);
	 return b;
}


const easing = ['linear','ease-in','ease-out','ease-in-out']
const count = ['infinite','20','15','10']

for(let i=0; i<=100 ;i++){
	 // console.log(b)
	 let c = r(50)+10;
	 let e = r(4);
	bubble_wrap.children('div').eq(i).css({left:r(100)+'%', width:c+'px',height:c+'px',opacity:r(100)/100,animation:`bubble ${r(100)+5}s ${easing[e]} ${count[e]}`})
}


/*<div class="bub bub_08"></div>
.bub_05{left:#{random(2000)}px;  width: 25px; height: 25px;  animation:bubble 9s ease-in infinite;}

*/
})(jQuery);