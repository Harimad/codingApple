/* eslint-disable */
import React, {useState} from 'react';
import './App.css';

function App() {

  var data = 'TIMmy';
  var 스타일 = {color: 'pink', fontSize: '30px'};

  // 중요한 데이터는 변수말고 리액트 state로
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '뛰융의 맛집 리스트']);
  let [따봉, 따봉변경] = useState([1, 2, 3]);
  let [글번호, 글번호변경] = useState(0);
  let [입력값, 입력값변경] = useState('');

  const 글추가 = (글) => {
    let 글복사 = [...글제목];
    글복사.unshift(글);
    글제목변경(글복사);

    // 따봉도 추가
    let 따봉복사 = [...따봉];
    따봉복사.unshift(0);
    따봉변경(따봉복사);
  }

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
        <div style ={스타일}>Blog</div>
        <div className={data}>{data}</div>
      </div>

      {/* 반복문으로 코드줄이기 */}
      {
        글제목.map((글, i) => {
          return (
            <div className='list' key={i}>
            <h3 onClick={() => 글번호변경(i)}> { 글 } <span onClick={ () => 따봉함수(i) }>👍</span> {따봉[i]}</h3>
            <p>2월 17일 발행</p>
            <hr></hr>
          </div>
          )
        })
      }
      <input onChange={ (e) => {입력값변경(e.target.value)}}></input>
      <button onClick={ () => {글추가(입력값)} }>글 추가</button>
      <button onClick={ () => {modal변경(!modal)} }>div토글버튼</button>

      {
        modal === true
        ? <Modal 글제목={글제목} 글번호={글번호}></Modal>
        : null
      }

      {/* 옛 React */}
      <Profile></Profile>
    </div>
  );
}
// 요즘 React
function Modal(props) {
  return (
    <div className='modal'>
      <h2> { props.글제목[props.글번호]} </h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

// 옛날 React
class Profile extends React.Component {
  constructor() {
    super();
    this.state = { name: 'KIM', age: 30 }
  }

  changeName1() {
    this.setState( {name: 'LEE'})
  }
  changeName2 = () => {
    this.setState( {name: 'WOW'})
  }

  render() {
    return (
      <div>
        <h3> 저는 {this.state.name} 입니다</h3>
        <button onClick={ () => {this.setState( {name: 'PARK' } ) } }>park버튼</button>
        <button onClick={ this.changeName1.bind(this) }>Lee버튼</button>
        <button onClick={ this.changeName2 }>Lee버튼</button>
      </div>
    )
  }
}

export default App;
