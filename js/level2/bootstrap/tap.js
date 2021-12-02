// 버튼0 (products) 누르면
// 0. 나머지버튼(주황제거) + 나머지내용(안보이게)
// 1. 버튼0이 주황색으로 하이라이트
// 2. 내용0이 보여야함

let tabBtnLen = $('.tab-button').length;

for (let i = 0; i < tabBtnLen; i++) {
	$('.tab-button').eq(i).click(() => {
		$('.tab-button').removeClass('active');
		$('.tab-content').removeClass('show');
		$('.tab-button').eq(i).addClass('active');
		$('.tab-content').eq(i).addClass('show');
	})
}
