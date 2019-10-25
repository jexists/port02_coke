// brand_box.js

let brand=['coke','sprite','fanta','mini_maid','zico'];

	const brand_box = document.querySelector('.brand_box');
	let brand_li ;
	let button;

	// brand_box.style.backgroundColor = "#fac";
	// brand_box.style.color = "#000";


	for (let i=0; i<brand.length; i++){
		let myli = document.createElement('li');
	  brand_box.appendChild(myli);
	  // console.log(brand_box.childNodes[i]);
	  brand_li = brand_box.childNodes[i];
	  brand_li.classList.add(brand[i]);
	  //내가 해보는것
	 	let mybtn = document.createElement('button');
	 	brand_li.appendChild(mybtn);
	 	let myicon = document.createElement('i');
	 	mybtn.appendChild(myicon);
	 	myicon.classList.add('fas', 'fa-plus');
	};

for(let i=0; i< brand_box.childNodes.length; i++){
	brand_box.childNodes[i].childNodes[0].style= 'color:#f0a; font-size:2rem;';
};

/*
다시해야하네...ㅠㅠㅠㅠㅠ

// brand_box.js
'use strict';
let brand=['coke','sprite','fanta','mini_maid','zico'];

	const brand_box = document.querySelector('.brand_box');
	let brand_li ;
	let button;

	// brand_box.style.backgroundColor = "#fac";
	// brand_box.style.color = "#000";

	for (let i=0; i<brand.length; i++){
		let myli = document.createElement('li');
	  brand_box.appendChild(myli);
	  // console.log(brand_box.childNodes[i]);
	  // console.log(brand[i]);
	  brand_li = brand_box.childNodes[3];
	  // brand_li.style.color ="#ac0";
		// console.log(brand_li);

	  
	  brand_li.classList.add(brand[i]);
	  //내가 해보는것
	 	let mybtn = document.createElement('button');
	 	brand_li.appendChild(mybtn);
	 	let myicon = document.createElement('i');
	 	mybtn.appendChild(myicon);
	 	myicon.classList.add('fas', 'fa-plus');
	 	
	};

// for(let i=0; i< brand_box.childNodes.length; i++){
// 	brand_box.childNodes[i].childNodes[0].style= 'color:#f0a; font-size:2rem;';
//};



*/
