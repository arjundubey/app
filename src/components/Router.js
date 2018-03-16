import React, { Component } from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import HomePage from './home';
import LoginForm from './loginForm';
import RegisterForm from './registerForm';
import UserProfile from './userProfile';

const Router = () => (

   <BrowserRouter>
   		<Switch>
   			<Route exact path="/" component={HomePage} />
   			<Route exact path="/login" component={LoginForm} />
   			<Route exact path="/register" component={RegisterForm} />
   			<Route exact path="/user/profile" component={UserProfile} />
   		</Switch>
   </BrowserRouter>

)

export default Router;