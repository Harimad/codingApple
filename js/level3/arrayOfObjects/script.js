var products = [
	{ id: 0, price: 70000, title: 'Blossom Dress' },
	{ id: 1, price: 50000, title: 'Springfield Shirt' },
	{ id: 2, price: 60000, title: 'Black Monastery' }
]
// 데이터 바인딩(꽂아넣기)
let content1 = document.querySelector('.content1');
let content2 = document.querySelector('.content2');
let content3 = document.querySelector('.content3');
function dataBind() {
	content1.children[0].textContent = products[0].title;
	content2.children[0].textContent = products[1].title;
	content3.children[0].textContent = products[2].title;
	content1.children[1].textContent = products[0].price;
	content2.children[1].textContent = products[1].price;
	content3.children[1].textContent = products[2].price;
}

// 가격순정렬
$('.priceSort').click(() => {
	products.sort(function (a, b) {
    return a.price - b.price;
	})
	dataBind();
});

//제목순 정렬
$('.nameSort').click(() => {
	products.sort((a, b) => {
		if(a.title > b.title) {
			return 1;
		} else {
			return -1;
		}
	})
	dataBind();
})

//6만원 이하
$('.underSix').click(function() {
	var newProducts = products.filter(elem => {
		return elem.price <= 60000
	});

	$('.cardContainer').html('');
	newProducts.forEach(elem => {
		var 템플릿 = `<div class="card data-${elem.id}">
		<img src="https://via.placeholder.com/600">
		<div class="card-body content3">
			<h5>${elem.title}</h5>
			<p>가격 : ${elem.price}</p>
			<button class="btn btn-danger">주문하기</button>
		</div>
	</div>`;
	$(".cardContainer").append(템플릿);
	})

})
