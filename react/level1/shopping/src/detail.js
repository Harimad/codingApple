import React, {useState, useEffect, useContext} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';
import styled from 'styled-components';
import {재고context} from './App.js';
import {Nav} from 'react-bootstrap';
import './Detail.scss';
import {connect} from 'react-redux';

let 박스 = styled.div`
	padding: 20px;
	background: #eee;
`;
let 제목 = styled.h4`
	font-size: 24px;
	color: ${props => props.색상};
`;

function Detail(props) {
	let history = useHistory();
	let { id } = useParams();

	let 찾은상품 = props.shoes.find(function(상품){
		return 상품.id == id;
	});

	let [alert, alert변경] = useState(true);
	let [inputData, inputData변경] = useState('');

	useEffect(() => {
		let 타이머 =setTimeout(() => { alert변경(false)},2000)
		return ()=>{ clearTimeout(타이머) }
	}, []);

	let 재고 = useContext(재고context);
	let [누른탭, 누른탭변경] = useState(0);

	let [스위치, 스위치변경] = useState(false);

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-6">
					<img src={`https://codingapple1.github.io/shop/shoes${찾은상품.id+1}.jpg`} width="100%" />
				</div>
				<div className="col-md-6 mt-4">
					<h4 className="pt-5"> {찾은상품.title} </h4>
					<p> {찾은상품.content} </p>
					<p> {찾은상품.price} 원</p>

					<button className="btn btn-danger">주문하기</button>
					<button className="btn btn-danger" onClick={() => {history.push("/")}}>홈으로 가기</button>
					<button className="btn btn-danger" onClick={() => {history.goBack()}}>뒤로가기</button>

					<박스>
						<제목 색상={'red'}>IIIII</제목>
						<제목 className='blue'>IIIII</제목>
					</박스>

					{inputData}
					<input onChange={(e)=>{inputData변경(e.target.value)}}></input>
					{
						alert === true
						? (<div className='my-new-alert'>
							<p>재고가 얼마 남지 않았습니다</p>
						</div>)
						: null
					}
				</div>
			</div>

			<Info 재고={props.재고}></Info>
			{/* <button onClick={()=>{props.재고변경([9,10,11])}}>주문하기</button> */}
			<button onClick={()=>{

				props.dispatch({type: '항목추가', payload: {id: 2, name: '새상품', quan: 1}})
				history.push('/cart');

				}}>주문하기</button>
			<hr></hr>
			<div>
				<Nav variant="tabs" defaultActiveKey="link-0">
					<Nav.Item>
						<Nav.Link eventKey="link-0" onClick={ () => {스위치변경(false); 누른탭변경(0)} }>Active</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link eventKey="link-1" onClick={ () => {스위치변경(false); 누른탭변경(1)} }>Option 2</Nav.Link>
					</Nav.Item>
				</Nav>

				<CSSTransition in={스위치} classNames="wow" timeout={500}>
					<TabContent 누른탭={누른탭} 스위치변경={스위치변경}/>
				</CSSTransition>
			</div>
		</div>
	)
};

function Info(props) {
	return (
		<p>재고 : {props.재고[0]}</p>
	)
}

function TabContent(props){
	useEffect(() => {
		props.스위치변경(true);
	});

	if (props.누른탭 === 0){
		return <div>내용0</div>
	} else if (props.누른탭 === 1){
		return <div>내용1</div>
	} else if (props.누른탭 === 2){
		return <div>내용2</div>
	}
}

function state를props화(state) {
	// console.log(state);
	return {
		state: state.reducer,
		alert열렸니: state.reducer2
	}
}
export default connect(state를props화)(Detail);
