import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Login from './pages/login';
import Main from './pages/main';
import Adsinfo from './pages/adsinfo';
import UserRegister from './pages/userRegister'
import ForgotPassword from './pages/forgotPassword'
import userProfile from './pages/userProfile'

import './styles.css';

class App extends Component {
  render(){
    return (
      <div>
        <Header />
        <div className="App">
          <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/cafofos/:id" component={Adsinfo} />
              <Route path="/login" component={Login} />
              <Route path="/cadastro" component={UserRegister} />
              <Route path="/esqueci-a-senha" component={ForgotPassword} />
              <Route path="/perfil" component={userProfile} />
          </Switch>
        </div>
      </div>
    );

  }
}

export default App;