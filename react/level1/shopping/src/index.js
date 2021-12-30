import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

let 기본state = [
  {id: 0, name: '멋진신발', quan: 2},
  {id: 1, name: '둥근신발', quan: 10},
];

function reducer(state = 기본state, 액션) {
  // 버튼 누른 index 찾기
  let idx = state.findIndex(elem => elem.id === 액션.num );

  if (액션.type === '항목추가') {
    let copy = [...state];
    copy.push(액션.payload);
    return copy;
  }

  if (액션.type === '수량증가') {
    let copy = [...state];
    copy[idx].quan++;
    return copy
  } else if (액션.type === '수량감소') {
    let copy = [...state];
    copy[idx].quan--;
    return copy;
  }
  return state
}

let alert초기값 = true;

function reducer2(state = alert초기값, 액션) {
  if (액션.type === 'alert닫기') return false;
  else return state;
}

let store = createStore(combineReducers({reducer, reducer2}))

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
