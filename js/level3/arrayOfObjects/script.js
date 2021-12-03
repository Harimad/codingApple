var products = [
	{ id: 0, price: 70000, title: 'Blossom Dress' },
	{ id: 1, price: 50000, title: 'Springfield Shirt' },
	{ id: 2, price: 60000, title: 'Black Monastery' }
]
// 데이터 바인딩(꽂아넣기)
let content1 = document.querySelector('.content1');
let content2 = document.querySelector('.content2');
let content3 = document.querySelector('.content3');

content1.children[0].textContent = products[0].title;
content2.children[0].textContent = products[1].title;
content3.children[0].textContent = products[2].title;

content1.children[1].textContent = products[0].price;
content2.children[1].textContent = products[1].price;
content3.children[1].textContent = products[2].price;

// 가격순정렬
$('.priceSort').click(() => {
	products.sort(function (a, b) {
    return a.price - b.price;
	})
	content1.children[0].textContent = products[0].title;
	content2.children[0].textContent = products[1].title;
	content3.children[0].textContent = products[2].title;

	content1.children[1].textContent = products[0].price;
	content2.children[1].textContent = products[1].price;
	content3.children[1].textContent = products[2].price;
});
