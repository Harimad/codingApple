//this & arrow function 연습문제
// 1. 간단한 메소드 만들기

var 사람 = {
	name: '손흥민',
	sayHi: function() {
		console.log(`안녕 나는 ${this.name}`);
	},
	sayHi2() {
		console.log(`안녕 나는 ${this.name}2`);
	}
}

사람.sayHi(); //안녕 나는 손흥민
사람.sayHi2();

//2. 오브젝트 내의 데이터를 전부 더해주는 메소드만들기
// 조건) 자료 object 중괄호 내에 코드 작성 금지
var 자료 = {
	data: [1, 2, 3, 4, 5],
};
자료.자료전부더하기 =  function() {
	return this.data.reduce((prev, curr) => prev + curr)
}
console.log(자료.자료전부더하기()); //15

// 3. setTimeout 이용해보기
document.getElementById('버튼').addEventListener('click', function() {
	setTimeout(() => {console.log(this.innerHTML)}, 1000); //undefined
});

