import React from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute'


function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Login}/>
      <Route path="/register" component={Register}/>
      <PrivateRoute path="/Dashboard" component={Dashboard}/>
    </BrowserRouter>

  );
}

export default App;
