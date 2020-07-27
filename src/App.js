import React, { Component } from 'react';
import { Route, Switch, Redirect, HashRouter } from 'react-router-dom';
import Login from '@/pages/login/login';
import Index from '@/pages/index/index';
import '@/App.sass';


class App extends Component{
  render() {
    return (
        <div className="App">
            <HashRouter>
                <Switch>
                    <Redirect path="/" to="/index" exact></Redirect>
                    <Route path="/login" component={ Login }></Route>
                    <Route path="/index" component={ Index }></Route>
                </Switch>
            </HashRouter>
        </div>
    );
  }
}

export default App;
