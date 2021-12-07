// navbar 스크롤바를 내리면 클래스 붙이기
$(window).on('scroll', () => {
	if ($(window).scrollTop() > 100) {
		$('.nav-menu').addClass('nav-black');
	} else {
		$('.nav-menu').removeClass('nav-black');
	}

})

// 이메일 검사
$('form').on('submit', (e) => {
	var email = $('.input-email').val();
	if (/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zAA-Z]{2,3}$/.test(email) == false || email == '') {
		e.preventDefault();
		$('.email-alert').show();
	}
});
// 비밀번호 검사
$('form').on('submit', (e) => {
	var password = $('.input-password').val();
	if (/[A-Z]+/.test(password) == false) {
		e.preventDefault();
		$('.password-alert').show();
	}
});

$('.btnLogIn').on('click', () => {
	$('.black-bg').addClass('slide-down');
});

$('.btnShowMenu').click(() => {
	$('.left-menu').animate({ marginLeft: '0px' }, 1000);
});

$('.btnClose').on('click', () => {
	$('.black-bg').fadeOut();
});

$('.nav-link').on('click', () => {
	$('.nav-sub').slideToggle();
});

// Carousel(이미지슬라이드) 버튼
$('.slide-1').click(() => {
	$('.slide-container').css('transform', 'translateX(0)');
})
$('.slide-2').click(() => {
	$('.slide-container').css('transform', 'translateX(-100vw)');
})
$('.slide-3').click(() => {
	$('.slide-container').css('transform', 'translateX(-200vw)');
})

// Carousel 안의 슬라이드 버튼
var nowImg = 1;
var imgCount = document.querySelector('.slide-container').children.length;

$('.slide-next').click(() => {
	if (nowImg < imgCount) { //1 < 3 (1,2 : 2번)
		$('.slide-container').css('transform', `translateX( ${-nowImg * 100}vw )`);
		nowImg++;
	}
})

$('.slide-prev').click(() => {
	if (nowImg > 1) { //4번-> X:-200px, 3번 -> X:-100px, 2번 -> X:0px
		$('.slide-container').css('transform', `translateX( ${(nowImg - 2) * -100}vw )`);
		nowImg--;
	}
})

//Tap

// 버튼0 (products) 누르면
// 0. 나머지버튼(주황제거) + 나머지내용(안보이게)
// 1. 버튼0이 주황색으로 하이라이트
// 2. 내용0이 보여야함

// let tabBtnLen = $('.tab-button').length;

// for (let i = 0; i < tabBtnLen; i++) {
// 	$('.tab-button').eq(i).click(() => {
// 		$('.tab-button').removeClass('active');
// 		$('.tab-content').removeClass('show');
// 		$('.tab-button').eq(i).addClass('active');
// 		$('.tab-content').eq(i).addClass('show');
// 	})
// }

// 탭기능 다시만들기: 이벤트 버블링 응용과 dataset
function 탭열기(숫자) {
	$('.tab-button').removeClass('active');
	$('.tab-content').removeClass('show');
	$('.tab-button').eq(숫자).addClass('active');
	$('.tab-content').eq(숫자).addClass('show');
}

$('.list').click((e) => {
	탭열기(e.target.dataset.id); // 탭열기(내가누른버튼에숨겨진숫자)
});

// jQuery 버전 , js - dataset와 같음
$('.list').data('작명', '값'); //값설정
$('.list').data('작명'); //값쓸때


// 이벤트 버블링

// e.target; //지금 실제로 클릭한 요소
// e.currentTarget; //지금 이벤트리스너가 달린 곳
// $(this); //위와 같음
// e.preventDefault(); //기본동작 막기

$('.black-bg').click((e) => {
	// console.log(e.target);
	// console.log(e.currentTarget);

	// 만약, 지금 실제로 클릭한게 검은배경일 때만!!
	if (e.target == e.currentTarget) {
		$('.black-bg').hide();
	}
})

//Hammer.js로 이미지 슬라이드 터치 기능 만들기 1

var 이미지1 = document.querySelectorAll('.slide-box img')[0];

var 매니저 = new Hammer.Manager(이미지1);
매니저.add(new Hammer.Pan({ threshold: 0}));

매니저.on('pan', function(e) {
	if (e.deltaX < -1) { //왼쪽슬라이드 할때 -> 왼쪽이동
		$('.slide-container').css('transform', `translateX(${e.deltaX}px)`);
		//만약에 이사람이 마우스를 놓으면 ...
		if (e.isFinal) {
			$('.slide-container').addClass('transforming');
			$('.slide-container').css('transform', 'translateX(-100vw)');
			setTimeout(() => {
				$('.slide-container').removeClass('transforming');
			}, 500);
		}
	}
})
