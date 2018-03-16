import React from "react";
import axios from 'axios';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/index.js';

var querystring = require('querystring');

class LoginFormStub extends React.Component {

  loginUser = (event) => {

    let temp = this;
    event.preventDefault();
    
     console.log("event works");
     
     axios.post('http://localhost:3010/ajax', querystring.stringify({
            type : 'login-user',
            email : document.querySelector('#email').value,
            password : document.querySelector('#password').value,
           
          }) )
          .then(function (response) {

       let msg = document.querySelector('#rg-message');
             
             if(!response.data.err) {
               console.log('Yay no error !');


              if(response.data.rows.length > 0) {
                 msg.innerHTML = "Login successful ";

                 console.log(response.data.rows[0]);
                 temp.props.addUser(response.data.rows[0].name , response.data.rows[0].email);
                 temp.props.history.push('/user/profile');
              }
                 
              else  
                  msg.innerHTML = "Invalid login check please details or register <a href='/register'>here.</a>";

               msg.style.display = 'block';

             } else {

              msg.innerHTML = "Something went wrong , please try again.";
              msg.style.display = 'block';

             }

          });

  }

	render() {

		return (

			<div className="login-form">
                
                <div className="fr-widget">
                         
                          <div className="title">
                              <h3>Login</h3>
                          </div>

                          <div className="fr-widget-body">
                              
                              <form action="" onSubmit={this.loginUser}>
                                  
                                  <div id="rg-message" className="alert alert-info" role="alert"></div>

                                  
                                  <div className="row">
                                  <div className="col">
                                  <label >Enter email</label>
                                  <input type="email" className="form-control" id="email" />  
                                  </div>
                                  </div>
                                  
                                  <div className="row">
                                  <div className="col">
                                  <label >Enter password</label>
                                  <input type="password" className="form-control" id="password" />  
                                  </div>
                                  </div>
                                  
                                  <div className="row">    
                                  <div className="col">    
                                  <button className='btn'>Login <i className="fas fa-angle-right"></i></button>
                                  </div>
                                  </div>
                               </form>

                          </div>

                     </div>


            </div>

		);

	}

}

function mapStateToProps(state) { 

    return { email : state.email , name : state.name };
 } 

function mapDispatchToProps(dispatch) { 

    return bindActionCreators(actions,dispatch);
 } 

const LoginForm = connect(mapStateToProps,mapDispatchToProps)(LoginFormStub); 

export default LoginForm;

