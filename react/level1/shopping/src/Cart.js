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
					<tr>
						<td>1</td>
						<td>{props.state[0].name}</td>
						<td>Table Cell3</td>
						<td>Table Cell4</td>
					</tr>
					{console.log(props)}
					{
						props.state.map((x, i) => {
							return (
								<tr key={i}>
									<td>{x.id}</td>
									<td>{x.name}</td>
									<td>{x.quan}</td>
									<td>
										<button> + </button>
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
