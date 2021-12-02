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
