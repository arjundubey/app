import React from "react";
import axios from 'axios';

var querystring = require('querystring');

class RegisterForm extends React.Component {

	registerUser = (event) => {

		event.preventDefault();

		 axios.post('http://localhost:3010/ajax', querystring.stringify({
            type : 'register-user',
            name : document.querySelector('#name').value,
            password : document.querySelector('#password').value,
            email : document.querySelector('#email').value
           
          }) )
          .then(function (response) {

			 let msg = document.querySelector('#rg-message');
             
             if(!response.data.err) {
             	 console.log('Yay no error !');

             	 msg.innerHTML = " Registration successfull, please goto <a href='/login'>Login page</a> to login. ";
             	 msg.style.display = 'block';
             } else {

             	msg.innerHTML = "User already exists or details are not correct please try again.";
             	msg.style.display = 'block';

             }

          });

	}

	render() {

		return (

			<div className="login-form">
                
                <div className="fr-widget">
                         
                          <div className="title">
                              <h3>Register</h3>
                          </div>

                          <div className="fr-widget-body">
                              
                               <form action="" onSubmit={this.registerUser}>
                                  
                                  <div id="rg-message" className="alert alert-info" role="alert"></div>

                                   <div className="row">
                                  <div className="col">
                                  <label >Enter Name</label>
                                  <input type="text" className="form-control" name="name" id="name" />  
                                  </div>
                                  </div>

                                  
                                  <div className="row">
                                  <div className="col">
                                  <label >Enter Email</label>
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
                                  <button className='btn'>Register <i className="fas fa-angle-right"></i></button>
                                  </div>
                                  </div>


                               </form>

                          </div>

                     </div>


            </div>

		);

	}

}

export default RegisterForm;

