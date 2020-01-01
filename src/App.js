import React, { Component } from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Login from '@/pages/login/login';
import Index from '@/pages/index/index';
import '@/App.sass';


class App extends Component{
  render() {
    return (
        <div className="App">
          <Switch>
          <Redirect path="/" to="/index" exact></Redirect>
            <Route path="/login" component={ Login }></Route>
            <Route path="/index" component={ Index }></Route>
          </Switch>
        </div>
    );
  } 
}

export default App;
