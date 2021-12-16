import React, {useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';

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

	useEffect(() => {
		setTimeout(() => {
			document.querySelector('.my-new-alert').style.background = "red";
		},1000)
	});
	useEffect(() => {
		setTimeout(() => {
			document.querySelector('.my-new-alert').style.display	= "none";
		}, 2000)
	});

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
					<div className='my-new-alert'>
						<p>재고가 얼마 남지 않았습니다</p>
					</div>
				</div>
			</div>
		</div>
	)
};
export default Detail
