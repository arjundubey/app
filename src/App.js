import React, { Component } from 'react';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import axios from 'axios';

var querystring = require('querystring');


class App extends Component {

  state = {

    
  }

  setResult = (result) => {


  }

  

  render() {
    return (
      <div className="App">
        
        <RegisterForm />

      </div>
    );
  }
}

export default App;
