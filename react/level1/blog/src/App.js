/* eslint-disable */
import React, {useState} from 'react';
import './App.css';

function App() {

  var data = '안녕하세요';
  var 스타일 = {color: 'pink', fontSize: '30px'};

  // 중요한 데이터는 변수말고 리액트 state로
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '뛰융의 맛집 리스트']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);

  const 따봉함수 = (i) => {
    let 따봉copy = [...따봉];
    따봉copy[i]++;
    따봉변경(따봉copy);
  }

  let [modal, modal변경] = useState(false);

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

      {/* 반복문으로 코드줄이기 */}
      {
        글제목.map((글, i) => {
          return (
            <div className='list'>
            <h3> { 글 } <span onClick={ () => 따봉함수(i) }>👍</span> {따봉[i]}</h3>
            <p>2월 17일 발행</p>
            <hr></hr>
          </div>
          )
        })
      }

      <button onClick={ () => {modal변경(!modal)} }>div토글버튼</button>

      {
        modal === true
        ? <Modal></Modal>
        : null
      }
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
