import React, { Component } from 'react';
import './home.css';
import { Link, Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
                hello world
          </p>
            {/* <ul>
            <Link to="/home"><li>home</li></Link>
              <Link to="/props"><li>props</li></Link>
              <Link to="/propschild"><li>propschild</li></Link>
            </ul> */}
        </header>
      </div>
    );
  }
}

export default App;
