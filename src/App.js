import React from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddFriend from './components/Addfriend';
import Message from './components/Message'
import Location from './components/Location'
import Profile from './components/Profile'
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login}/>
      <Route path="/Register" component={Register}/>
      <PrivateRoute path="/Dashboard" component={Dashboard}/>
      <PrivateRoute path="/Message" component={Message}/>
      <PrivateRoute path="/Location" component={Location}/>
      <PrivateRoute path="/Profile" component={Profile}/>
      <PrivateRoute path="/Addfriend" component={AddFriend}></PrivateRoute>
    </BrowserRouter>

  );

  
}

export default App;
