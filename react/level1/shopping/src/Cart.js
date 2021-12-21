import React from 'react';
import {Table} from 'react-bootstrap';
import {connect} from 'react-redux';

function Cart(props){
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
					props.state.map((x, i) => {
						return (
							<tr key={i}>
								<td>{x.id}</td>
								<td>{x.name}</td>
								<td>{x.quan}</td>
								<td>
									<button onClick={() => { props.dispatch({type: '수량증가', num: x.id}) }}> + </button>
									<button onClick={() => { props.dispatch({type: '수량감소', num: x.id}) }}> - </button>
								</td>
							</tr>
						)
					})
				}
				</tbody>
      </Table>
    </div>
  )
}

function state를props화(state) {
	return {
		state: state
	}
}

export default connect(state를props화)(Cart);