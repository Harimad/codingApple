import React from 'react';
import {Table} from 'react-bootstrap';
import {connect, useDispatch, useSelector} from 'react-redux';

function Cart(props){
	let state = useSelector((state) => state);
	let dispatch = useDispatch();
	console.log(state.reducer);
	console.log(state.reducer2);

  return (
    <div>
      <Table responsive>
				<thead>
					<tr>
						<th>#</th>
						<th>상품명</th>
						<th>수량</th>
						<th>변경</th>
					</tr>
				</thead>
				<tbody>
				{
					state.reducer.map((x, i) => {
						return (
							<tr key={i}>
								<td>{x.id}</td>
								<td>{x.name}</td>
								<td>{x.quan}</td>
								<td>
									<button onClick={() => { dispatch({type: '수량증가', 데이터: x.id}) }}> + </button>
									<button onClick={() => { dispatch({type: '수량감소', 데이터: x.id}) }}> - </button>
								</td>
							</tr>
						)
					})
				}
				</tbody>
      </Table>
			{	state.reducer2 === true
			?	(<div className='my-alert'>
					<p>지금 구매하시면 20% 할인</p>
					<button onClick={() => {dispatch({type: 'alert닫기'})}}>닫기</button>
				</div> )
			: null
			}
    </div>
  )
}

// function state를props화(state) {
// 	// console.log(state);
// 	return {
// 		state: state.reducer,
// 		alert열렸니 : state.reducer2
// 	}
// }

// export default connect(state를props화)(Cart);
export default Cart;
