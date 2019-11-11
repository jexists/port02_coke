(function($){
	// 슬라이드쇼
	$('.slideshow').each(function(){
	//each()매서드 선택한 jQuery객체 각각에 반복 처리 

	let container = $(this), //슬라이드쇼 전체 영역
		slideGroup = container.find('.slideshow_slides'), //모든 슬라이드 그룹 
		slides = slideGroup.find('.slide'), // 슬라이드
		nav = container.find('.slideshow_nav'), //내비게이션(next,prev)
		indicator = container.find('.slideshow_indicator'), //5개 점

		slideCount = slides.length, //슬라이드 순서
		indicatorHTML = " ", //html 추가 요소
		currentIndex = 0, //현재 슬라이드
		duration = 500, // 슬라이드 시간
		easing = 'easeInOutExpo', //easing 종류
		interval = 7500, //자동실행시간
		timer; //슬라이드 정지 
		// html 요소의 배치, 생성, 삽입 ============

		// 각 슬라이드의 위치 결정 & 해당 인디케이터의 앵커 설정

		slides.each(function(i){
			$(this).css({left: 100 * i + '%'});
			indicatorHTML += '<a href="#">' + (i + 1) + '</a>';
		});
		//인디케이터에 콘텐츠 삽입
		indicator.append(indicatorHTML);
		//함수정의
		//모든 슬라이드를 나타내는 함수
		function goToSlide (index) {
	// 주석XXXXXX
		slideGroup.animate({left: - 100 * index + '%' }, duration, easing);
		currentIndex = index;
		undateNav();
		}

		function undateNav(){
			let navPrev = nav.find('.prev'),
			navNext = nav.find('.next');

			if (currentIndex === 0){
				navPrev.addClass('disabled');
			}else{
				navPrev.removeClass('disabled');
			}
			if (currentIndex === slideCount - 1){
				navNext.addClass('disabled');
			}else{
				navNext.removeClass('disabled');
			}
			indicator.find('a').removeClass('active')
				.eq(currentIndex).addClass('active');
		}
		function startTimer(){
			timer = setInterval(function(){
				let nextIndex = (currentIndex + 1) % slideCount;
				goToSlide(nextIndex);
			},interval);
		}
		function stopTimer(){
			clearInterval(timer);
		}
		nav.on('click',function(e){
			e.preventDefault();
			if ($(this).hasClass('prev')){
				goToSlide(currentIndex - 1);
			}else{
				goToSlide(currentIndex + 1);
			}
	});

			indicator.on('click',function(e){
				e.preventDefault();
				if (!$(this).hasClass('active')) {
					goToSlide($(this).index());
				}
				});
					container.on({
						mouseenter: stopTimer,
						mouseleave: startTimer
					});
					goToSlide(currentIndex);
					startTimer();
			});

})(jQuery);