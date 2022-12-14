$(function() {

    /* TypeIn - main */

    $('#typing').typeIt({
        strings: ["자동차의 내일이 궁금하면", "테슬라를 보라."], // 타이핑 텍스트 입력
        speed: 120, // 알파벳 타이핑 속도
        autoStart: true, // 자동 재생 사용
        breakLines: true, // 줄 바꿈 사용
    });

    $(window).on('load',function(){
        $('.fadeText').delay(3500).fadeIn(4000);
		$('.mouse').delay(5000).fadeIn(4000);
	})
})