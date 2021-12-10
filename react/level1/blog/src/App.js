import React, {useState} from 'react';
import './App.css';

function App() {

  var data = '안녕하세요';
  var 스타일 = {color: 'pink', fontSize: '30px'};

  // 중요한 데이터는 변수말고 리액트 state로
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '뛰융의 맛집 리스트']);
  let posts = '강남 고기 맛집';

  return (
    <div className="App">
      <div className="black-nav">
        <div style ={스타일}>개발 blog</div>
        <div className={data}>{data}</div>
      </div>

      <div className='list'>
        <h3>{ 글제목[0] }</h3>
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
    </div>
  );
}

export default App;
