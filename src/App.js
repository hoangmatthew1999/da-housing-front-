import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Flexbox from 'flexbox-react';
import 'react-bootstrap';

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
  const styles = {width: "50em",
    padding: 0,
  };
  return(
    <div>
      <NavBar>
      <Navbar.Brand href="#home">Home</Navbar.Brand>
      </NavBar>
    </div>
  )
}
function App() {
  return (
    <div>
      <NavBar/>
      <Cards/>
      <Cards/>
    </div>

  );
}

export default App;
