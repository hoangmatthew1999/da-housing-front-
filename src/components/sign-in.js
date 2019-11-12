import React from 'react';
import background from '/Users/home/Desktop/da-housing-front/src/peter-mason-cTm7AAHAFqg-unsplash.jpg';
import '../App.css';

let signInStyle = { display: "block", borderStyle: "solid", borderColor: "black", height: "40%", width: '30%',backgroundColor: "white"};
let backgroundImage = { backgroundImage: `url(${background})`, height: "800px", width: '100%', backgroundSize: "100%"};
let bodyStyle = {height: "100%"};
class signIn extends React.Component{
    render(){
        return (
      <div>t
        <div style = {backgroundImage}>
        <div style = {signInStyle}>
        <ul>Username:<input type="text" /></ul>
        <ul>Password: <input type="password" /></ul>
        <a> Forgot Password? </a>
        <button>Submit</button>
        </div>
        </div>

      </div>
        )
    }
};

export {signIn};
