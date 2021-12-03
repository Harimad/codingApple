// O - 응용0. '가나다'순 정렬말고 '다나가'순 정렬은?
// O - 응용1. 사이트 처음 접속시 상품3개가 안보인다면 상품3개가 잘 보이게 어떻게함?
// O - 응용2. 필터버튼을 만드는게 아니라 <input>을 이용하려면?
// O - 응용3. 원래대로 버튼을 만들고 싶으면?
var products = [
	{ id: 0, price: 70000, title: 'Blossom Dress' },
	{ id: 1, price: 50000, title: 'Springfield Shirt' },
	{ id: 2, price: 60000, title: 'Black Monastery' }
]

var copyProducts = [...products];
const cardContainer = document.querySelector('.card-container');

function templateBind(구멍) {
	구멍.forEach((elem) => {
		var 템플릿 = `<div class="card data-${elem.id}">
		<img src="https://via.placeholder.com/600">
			<div class="card-body">
				<h5>${elem.title}</h5>
				<p>price : ${elem.price}</p>
				<button class="btn btn-danger">Order</button>
			</div>
		</div>`;
		cardContainer.innerHTML += 템플릿;
	})
}
// 데이터 바인딩(꽂아넣기)
document.addEventListener('DOMContentLoaded', () => {
	templateBind(copyProducts);
})

//가격순 정렬
$('.priceSort').click(() => {
	copyProducts.sort(function (a, b) {
    return a.price - b.price;
	})
	cardContainer.innerHTML = '';
	templateBind(copyProducts)
});

//이름별 정렬
$('.nameSort').click(() => {
	copyProducts.sort((a, b) => {
		if (a.title > b.title) {
			return 1;
		} else if (a.title < b.title) {
			return -1;
		}
	})
	cardContainer.innerHTML = '';
	templateBind(copyProducts);
});

// Over 50$
$('.overFifty').click(() => {
	$(`.card`).hide();

	copyProducts.forEach((elem) => {
		if (elem.price > 50000) {
			$(`.data-${elem.id}`).show();
		}
	})
})

//Over input $
$('.inputBtn').click(() => {
	$('.card').hide();
	let inputNum = prompt('input price');
	copyProducts.forEach((elem) => {
		if (elem.price > inputNum) {
			$(`.data-${elem.id}`).show();
		}
	})
})

//Show All
$('.showAll').click(() => {
	$('.card-container').html('');

	templateBind(products);
})
