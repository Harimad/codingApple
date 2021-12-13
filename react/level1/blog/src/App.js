/* eslint-disable */
import React, {useState} from 'react';
import './App.css';

function App() {

  var data = '안녕하세요';
  var 스타일 = {color: 'pink', fontSize: '30px'};

  // 중요한 데이터는 변수말고 리액트 state로
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '뛰융의 맛집 리스트']);
  let [따봉, 따봉변경] = useState(0);
  let posts = '강남 고기 맛집';

  //버튼 기능개발
  function 제목바꾸기() {
    let newArr = [...글제목];
    newArr[0] = '여자 코트 추천';
    글제목변경(newArr);
  }
  return (
    <div className="App">
      <button onClick={ 제목바꾸기 }>버튼</button>
      <div className="black-nav">
        <div style ={스타일}>개발 blog</div>
        <div className={data}>{data}</div>
      </div>

      <div className='list'>
        <h3>{ 글제목[0] } <span onClick={() => 따봉변경(따봉+1)}>👍</span> {따봉} </h3>
        <p>2월 17일 발행</p>
        <hr></hr>
      </div>

      <div className='list'>
        <h3>{ 글제목[1] }</h3>
        <p>2월 17일 발행</p>
        <hr></hr>
      </div>

      <div className='list'>
        <h3>{ 글제목[2] }</h3>
        <p>2월 17일 발행</p>
        <hr></hr>
      </div>

      <Modal></Modal>
    </div>
  );
}

function Modal() {
  return (
    <div className='modal'>
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
