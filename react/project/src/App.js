import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Home from './components/home/home.jsx';
import Props from './components/api/props.jsx';
import PropsChild from './components/api/propsChild.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
            <header className="App-header">
              {/* <img src={logo} className="App-logo" alt="logo" /> */}
              <Router>

                <Switch>
                
                    <Route path="/home" componet={Home} ></Route>
                    <Route path="/props" componet={Props} ></Route>
                    <Route pdth="/propschild" component={PropsChild}></Route>
                    <Redirect to="/home" />

                </Switch>

              </Router>
          </header>
      </div>
    );
  }
}

export default App;
