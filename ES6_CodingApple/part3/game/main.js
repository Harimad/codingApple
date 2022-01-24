// 네모 캔버스 그리기
var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

// 공룡 구현
var dino = {
	x : 10,
	y : 200,
	width : 50,
	height: 50,
	draw() {
		ctx.fillStyle = 'green';
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}

// 선인장 구현
class Cactus {
	constructor() {
		this.x = 500;
		this.y = 200;
		this.width = 50;
		this.height = 50;
	}
	draw() {
		ctx.fillStyle = 'red';
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}

var timer = 0; //시간 저장
var cactus여러개 = []; //선인장 여러개 담을 배열 생성

//애니메이션 만들려면 1초에 60번 dino x값 ++해줘야함 -> requestAnimationFrame함수 사용

function 프레임마다실행할거() { //1초에 60번 함수 실행됨
	requestAnimationFrame(프레임마다실행할거);
	timer++;

	ctx.clearRect(0, 0, canvas.width, canvas.height); //잔상없애기위해 canvas비우기

	if (timer % 120 === 0) { //120프레임(2초)마다 장애물생성  //144프레임 모니터는 1초당 144나눔
		var cactus = new Cactus();
		cactus여러개.push(cactus);
	}

	cactus여러개.forEach((a) => { //모든 장애물 다 그려줌
		a.x--;
		a.draw();
	})

	dino.draw()
}

프레임마다실행할거();
