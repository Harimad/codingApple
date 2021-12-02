// 버튼0 (products) 누르면
// 1. 버튼0이 주황색으로 하이라이트
// 2. 내용0이 보여야함

let tap = document.querySelector('.list').children;
let tapContent = document.querySelectorAll('.tab-content');

tap[0].addEventListener('click', () => {
	tap[0].classList.add('active');
	tap[1].classList.remove('active');
	tap[2].classList.remove('active');

	tapContent[0].classList.add('show');
	tapContent[1].classList.remove('show');
	tapContent[2].classList.remove('show');
})
tap[1].addEventListener('click', () => {
	tap[1].classList.add('active');
	tap[0].classList.remove('active');
	tap[2].classList.remove('active');

	tapContent[1].classList.add('show');
	tapContent[0].classList.remove('show');
	tapContent[2].classList.remove('show');
})
tap[2].addEventListener('click', () => {
	tap[2].classList.add('active');
	tap[0].classList.remove('active');
	tap[1].classList.remove('active');

	tapContent[2].classList.add('show');
	tapContent[0].classList.remove('show');
	tapContent[1].classList.remove('show');
})

// jQuery 위와 동일
$('.tab-button').eq(0).click(() => {
	$('.tab-button').removeClass('active');
	$('.tab-content').removeClass('show');

	$('.tab-button').eq(0).addClass('active');
	$('.tab-content').eq(0).addClass('show');
})
$('.tab-button').eq(1).click(() => {
	$('.tab-button').removeClass('active');
	$('.tab-content').removeClass('show');

	$('.tab-button').eq(1).addClass('active');
	$('.tab-content').eq(1).addClass('show');
})
$('.tab-button').eq(2).click(() => {
	$('.tab-button').removeClass('active');
	$('.tab-content').removeClass('show');

	$('.tab-button').eq(2).addClass('active');
	$('.tab-content').eq(2).addClass('show');
})
