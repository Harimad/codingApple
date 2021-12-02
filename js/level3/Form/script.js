// 셔츠 선택하면 밑 UI를 보여줌

$('#option1').on('change', () => {
	if ($('#option1').val() == '셔츠') {
		$('.size-select').show();
	} else {
		$('.size-select').hide();
	}
});
