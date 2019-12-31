import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Create from './components/create.component';
import Edit from './components/edit.component';
import View from './components/view.component';
import User from './components/user.component';

class App extends Component {
  render() {
    return (
      <Router>

        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a className="navbar-brand col-sm-3 col-md-2 mr-0" href={'/'}>CRUD DEMO</a>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap">
              <a className="nav-link" href={'/'}>Sign out</a>
            </li>
          </ul>
        </nav>

        <div className="container-fluid">
          <div className="row">
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
              <div className="sidebar-sticky">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link active" href={'/'}>
                      <span data-feather="home"></span>
                      Dashboard <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href={'/user'}>
                      <span data-feather="file"></span>
                      Users
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <Switch>
            <Route exact path='/create' component={Create} />
            <Route path='/edit/:id' component={Edit} />
            <Route path='/view/:id' component={View} />
            <Route path='/user' component={User} />
          </Switch>
        </div>

      </Router>
    );
  }
}

export default App;
