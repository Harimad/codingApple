/*ESlint disabled*/
import React, {useEffect, useState, useContext} from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import { Link, Route, Switch, useHistory} from 'react-router-dom';
import axios from 'axios';
import Data from './data.js';
import Detail from './detail.js';
import './App.css';
import Cart from './Cart.js';


export let 재고context = React.createContext(); //같은 변수값을 공유할 범위 생성

function App() {

  let [shoes, shoes변경] = useState(Data);
  let [btnCount, btnCount변경] = useState(1);
  let [재고, 재고변경] =useState([100, 111, 122]);
  // useEffect(() => {
  //   처음 로딩할떄 ajax 받아올때
	// 	axios.get('웹사이트').then().catch();
  // }, []);
  let history = useHistory();

  return (
    <div className="App">
      {/* Navbar */}
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#" onClick={()=>{history.push('/')}}>Shoes Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
              <Nav.Link as={Link} to={"/detail"}>Detail</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Switch>
        <Route exact path={"/"}>
          {/* Jumbotron */}
          <div className='jumbotron background'>
            <h1>Hello, world!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </div>

          {/* Item Layout */}
          <div className='container'>
            <재고context.Provider value={재고}>
              <div className='row'>
                {shoes.map((데이터, i) => {
                    return (<Card shoes={데이터} key={i}></Card>)
                  })}
              </div>
            </재고context.Provider>
          </div>
          <p className='text-center'>
            <Button variant="primary" onClick={() => {
              // 로딩중 UI 띄움(실습)
              // ...
              // 서버로 데이터 보냄
              // axios.post('서버URL', {id=3, pw="sdasdas"}).then()

              axios.get(`https://codingapple1.github.io/shop/data${btnCount+1}.json`)
              .then((result) => {
                // 로딩중 UI 삭제(실습)

                // console.log(result.data);
                shoes변경([...shoes, ...result.data]);
                btnCount변경(btnCount + 1);
                console.log(btnCount);
              })
              .catch(() => {
                // 로딩중 UI 삭제(실습)
                console.log('실패');
                // btnCount변경(false)
              })
            }}>더보기</Button>
          </p>
        </Route>

        {/* Detail */}
        <Route path={"/detail/:id"}>
          <재고context.Provider value={재고}>
            <Detail shoes={shoes} 재고={재고} 재고변경={재고변경}></Detail>
          </재고context.Provider>
        </Route>

        <Route path={"/cart"}>
          <Cart></Cart>
        </Route>
      </Switch>
    </div>
  );
}

function Card(props) {
  let 재고 = useContext(재고context);
  let history = useHistory();
  return (
    <div className='col-md-4' onClick={() => {history.push(`/detail/${props.shoes.id}`)}}>
      <img src= { `https://codingapple1.github.io/shop/shoes${props.shoes.id+1}.jpg` } width='100%'></img>
      <h4> { props.shoes.title } </h4>
      <p> { props.shoes.content } & { props.shoes.price }</p>
      <Test shoes={props.shoes}></Test>
    </div>
  )
}

function Test(props) {
  let 재고 = useContext(재고context);
  console.log(재고);
  return <p>재고: {재고[props.shoes.id]}</p>
}

export default App;
