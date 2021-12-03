var products = [
	{ id: 0, price: 70000, title: 'Blossom Dress' },
	{ id: 1, price: 50000, title: 'Springfield Shirt' },
	{ id: 2, price: 60000, title: 'Black Monastery' }
]
// 데이터 바인딩(꽂아넣기)
document.addEventListener('DOMContentLoaded', () => {
	products.forEach((elem) => {
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
})

//가격순 정렬
$('.priceSort').click(() => {
	products.sort(function (a, b) {
    return a.price - b.price;
	})
	cardContainer.innerHTML = '';
	products.forEach((elem) => {
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
});

//이름별 정렬
$('.nameSort').click(() => {
	products.sort((a, b) => {
		if (a.title > b.title) {
			return 1;
		} else if (a.title < b.title) {
			return -1;
		}
	})
	cardContainer.innerHTML = '';
	products.forEach((elem) => {
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
});

// 카드 동적 생성
const cardContainer = document.querySelector('.card-container');
$('.overFifty').click(() => {
	$(`.card`).hide();

	products.forEach((elem) => {
		if (elem.price > 50000) {
			$(`.data-${elem.id}`).show();
		}
	})
})

//Show All
$('.showAll').click(() => {
	$('.card').show();
})
