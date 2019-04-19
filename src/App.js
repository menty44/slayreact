import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';

import Genderindex from './components/gender/index.component';
import Gendercreate from './components/gender/create.component';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
        
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">React CRUD Example</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/services'} className="nav-link">Services</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/'} className="nav-link">SMS</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/'} className="nav-link">Users</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/'} className="nav-link">Advertisements</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/'} className="nav-link">Finance</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/'} className="nav-link">Chats</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/'} className="nav-link">Issues</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/'} className="nav-link">Logout</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/'} className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/'} className="nav-link">Register</Link>
                </li>
                
                {/* <li className="nav-item">
                  <Link to={'/gender/index'} className="nav-link">Gender</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Create</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/index'} className="nav-link">Index</Link>
                </li> */}
              </ul>
            </div>
          </nav> <br/>
          <h2>Welcome to React CRUD Tutorial</h2> <br/>
          <Switch>
              <Route exact path='/create' component={ Create } />
              <Route path='/edit/:id' component={ Edit } />
              <Route path='/index' component={ Index } />

              <Route path='/gender/index' component={ Genderindex } />
              <Route path='/gender/create' component={ Gendercreate } />
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;
