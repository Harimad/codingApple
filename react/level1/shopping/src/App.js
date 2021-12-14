import React, {useState} from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import Data from './data.js';
import './App.css';

function App() {

  let [shoes, shoes변경] = useState(Data);

  return (
    <div className="App">

      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Shoes Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
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
        <div className='row'>
          {/* Component로만 Card생성 */}
          <Card shoes = {shoes[0]}></Card>
          <Card shoes = {shoes[1]}></Card>
          <Card shoes = {shoes[2]}></Card>

          {/* map으로 Card 생성 */}
          {
            shoes.map((데이터, i) => {
              return (
                <Card shoes={데이터} key={i}></Card>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className='col-md-4'>
      <img src= { `https://codingapple1.github.io/shop/shoes${props.shoes.id+1}.jpg` } width='100%'></img>
      <h4> { props.shoes.title } </h4>
      <p> { props.shoes.content } & { props.shoes.price }</p>
    </div>
  )
}

export default App;
