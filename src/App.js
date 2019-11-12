import React from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Flexbox from 'flexbox-react';
import { Navbar, Nav, Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import background from './peter-mason-cTm7AAHAFqg-unsplash.jpg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {signIn} from './components/sign-in';

function Listing() {
  const listing = { display: "block", borderStyle: "solid", borderColor: "black", marginRight: "65%" }
  return (
    <div className="listing" style={listing}>
      <ul>Addresss<input type="text" /></ul>
      <ul>City<input type="text" /></ul>
      <ul>State<input type="text" /></ul>
      <ul>Price<input type="text" /></ul>
      <ul>Accomodation<input type="text" /></ul>
      <ul>Description<input type="text" /></ul>
      <ul>Images<input type="file" /></ul>
    </div>
  )
}
/*
function SignIn() {
  const signIn = { display: "block", borderStyle: "solid", borderColor: "black", marginRight: "65%", height: "100%"}
  const backgroundImage =    { backgroundImage: `url(${background})`, height: "100%"};
  return (
    <div className="signIn" style={signIn}>
      <section style = {backgroundImage}>
        <ul>Username:<input type="text" /></ul>
        <ul>Password: <input type="password" /></ul>
        <a> Forgot Password? </a>
        <button>Submit</button>
      </section>
    </div>
  )
}
*/
function Cards() {
  const card = { width: "30%" }
  return (
    <div className="card" style={card}>
      <img src="..." class="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>


  )
}
function Navigation() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">De Anza Housing</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/"><Nav.Link href="#home">Home</Nav.Link></Link>
            <Link to="/listing"><Button variant="primary">Add Listing</Button></Link>
            <Link to="/SignIn"><Nav.Link href="#Sign In">Sign In</Nav.Link></Link>

          </Nav>t
  </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
function Routing() {
  return (
    <Router>
      <Navigation />
      <Route path="/listing" component={Listing} />
      <Route path="/SignIn" component={signIn} />
    </Router>
  )
}

function App() {
  return (
    <div>
      <Routing />
    </div>

  );
}


export default App;
