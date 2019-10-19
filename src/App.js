import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Flexbox from 'flexbox-react';
import {Navbar, Nav} from 'react-bootstrap';

const styles = {
  card:{width: "18rem"} 
}

function Cards(){
  return (
    <div className="card" style = {styles.card}>
      <img src="..." class="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>    
      </div>


  )
}
function Navigation (){
  return(
    <div>
  <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">De Anza Housing</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </div>
  )
}
function App() {
  return (
    <div>
      <Navigation/>
      <Cards/>
      <Cards/>
    </div>

  );
}

export default App;
