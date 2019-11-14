// cs_wrap.js
	let story = ['story1','story2','story3']
	const cs_wrap = document.querySelector('.cs_wrap');
	let story_li ;
	
	for (let i=0; i<story.length; i++){
		let myli = document.createElement('li');
	  cs_wrap.appendChild(myli);
	  // console.log(brand_box.childNodes[i]);
	  story_li = cs_wrap.childNodes[i];
	  story_li.classList.add(story[i]);
	};