import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUsername } from '../actions';
import Player from './Player';
import Navigation from './Navigation';
import Upload from './Upload';
import Settings from './Settings';
import './App.css';
import history from '../history';


class App extends React.Component {
  componentDidMount() {
    this.props.setUsername(localStorage.getItem('username'));
  }

  render() {
    // React router used to determine which component to show
    return (
      <div className="bg-dark text-light app">
        <Router history={history}>
          <Route path="/" exact component={Player} />
          <Route path="/upload" exact component={Upload} />
          <Route path="/settings" exact component={Settings} />
          <Navigation />
        </Router>
      </div>
    );
  }
}

export default connect(null, { setUsername })(App);
