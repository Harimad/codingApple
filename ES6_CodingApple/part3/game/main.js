// 네모 캔버스 그리기
var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;


var img2 = new Image();
img2.src = 'img/dinosaur.png';
// 공룡 구현
var dino = {
	x : 10,
	y : 200,
	width : 50,
	height: 50,
	draw() {
		ctx.fillStyle = 'green';
		ctx.fillRect(this.x, this.y, this.width, this.height);
		ctx.drawImage(img2, this.x, this.y, this.width, this.height);
	}
}

var img1 = new Image();
img1.src = 'img/cactus.png';

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
		ctx.fillRect(this.x, this.y, this.width, this.height); //네모는 일명 hitbox임
		ctx.drawImage(img1, this.x, this.y, this.width, this.height)
	}
}

var timer = 0; //시간 저장
var cactus여러개 = []; //선인장 여러개 담을 배열 생성
var 점프timer = 0;
var animation;
//애니메이션 만들려면 1초에 60번 dino x값 ++해줘야함 -> requestAnimationFrame함수 사용

function 프레임마다실행할거() { //1초에 60번 함수 실행됨
	animation = requestAnimationFrame(프레임마다실행할거);
	timer++;

	ctx.clearRect(0, 0, canvas.width, canvas.height); //잔상없애기위해 canvas비우기

	if (timer % 200 === 0) { //120프레임(2초)마다 장애물생성  //144프레임 모니터는 1초당 144나눔
		var cactus = new Cactus();
		cactus여러개.push(cactus);
	}

	cactus여러개.forEach((cactus, idx, obj) => { //모든 장애물 다 그려줌
		//x 좌표가 0 미만이면 제거
		if(cactus.x < 0) { //지금 장애물 x 좌표 0미만이면
			obj.splice(idx, 1); //cactus여러개 배열에서 해당 요소 1개 제거
		}
		cactus.x -= 2;

		충돌하냐(dino, cactus); //충돌체크는 여기서 해야함. 왜냐면 주인공 VS 모든 장애물 충돌체크 해야하니까

		cactus.draw();
	})

	if (점프중 == true) { //스페이스바 누르면 점프
		dino.y -= 3;
		점프timer++;
	}
	if (점프timer > 50) { //100프레임 지나면 점프 중단
		점프중 = false;
		점프timer = 0; //초기화 해줘야 space 또 눌릴 수 있음
	}

	if (점프중 === false) { //점프 중이 아니면 내려오게함 , 땅 높이 정해둠
		if (dino.y < 200) {
			dino.y += 4;
		}
	}
	dino.draw()
}

프레임마다실행할거();

var 점프중 = false;
document.addEventListener('keydown', function(e) { // 스페이스바 누르면 이벤트 실행
	if(e.code === 'Space') {
		점프중 = true;
	} else if (e.code === 'KeyX') {
		점프중 = false;
	}
})


//3. 충돌체크하기
// 좌표계산하기
// 옆으로 만남 판단 ( 선인장 왼쪽 X좌표 - 공룡 오른쪽 x좌표)
// 위에서 만남 판단 ( 공룡 아래 Y좌표 - 선인장 위 Y좌표)

function 충돌하냐(dino, cactus) {
	var x축차이 = cactus.x - (dino.x + dino.width);
	var y축차이 = cactus.y - (dino.y + dino.height);
	if (x축차이 < 0 && y축차이 < 0) { //x, y 만나면
		ctx.clearRect(0, 0, canvas.width, canvas.height); //canvas비우기
		cancelAnimationFrame(animation); //애니메이션 중단 ( animation = requestAnimationFrame(프레임마다실행할거))
	}
}
