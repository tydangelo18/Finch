import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';

import Dashboard from './pages/Dashboard/dashboard';
import Saved from './pages/Saved/Saved';
import Alert from './components/Dashboard/Alert';
import store from './store';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Alert />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/saved' component={Saved} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export { App };
