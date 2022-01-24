var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

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

var timer = 0;
var cactus여러개 = [];

//애니메이션 만들려면 1초에 60번 dino x값 ++해줘야함

function 프레임마다실행할거() { //1초에 60번 함수 실행됨
	requestAnimationFrame(프레임마다실행할거);
	timer++;

	//잔상없애기위해 canvas비우기
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	//선인장 그리기, 2~3초에 한번 이거 실행
	if (timer % 120 === 0) { //120프레임(2초)마다 장애물생성  //144프레임 모니터는 144나눔(1초)
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
