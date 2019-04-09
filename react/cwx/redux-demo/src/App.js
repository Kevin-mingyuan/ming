import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import AA from './components/a.jsx';

import Login from './components/login.jsx';

import Register from './components/register.jsx';

import Info from './components/info.jsx'

import './App.css';

class App extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    
                    <Route ref='aa' exact path='/' component={AA} />

                    <Route path='/login' component={Login} />

                    <Route path='/register' component={Register} />

                    <Route path='/info' component={Info} />

                    {/* 重定向必须在路由之后 */}
                    <Redirect to='/login'/> 

                </Switch>
            </Router>
        );
    }
}

export default App;
