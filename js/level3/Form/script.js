// 셔츠 선택하면 밑 UI를 보여줌
//HTML을 자바스크립트로 짜서넣기(동적생성)

$('#option1').on('change', () => {
	var 사이즈 = [26, 28, 30, 32, 34, 36];
	var 템플릿 = '';

	if ($('#option1').val() == '바지') {
		$('#option2 option').remove();

		사이즈.forEach((elem) => {
			템플릿 += `<option>바지 : ${elem}</option>`;
		})
		$('#option2').append(템플릿);
	} else {
		$('#option2 option').html('');
	}
});
