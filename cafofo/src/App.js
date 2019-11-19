import React, { Component } from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header';
import Login from './pages/login';
import Main from './pages/main';
import Adslist from './pages/adslist';
import Adsinfo from './pages/adsinfo';
import UserRegister from './pages/userRegister'
import ForgotPassword from './pages/forgotPassword'
import AdsRegister from './pages/adsRegister'
import { isAuthenticated } from "./services/auth";

import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );


class App extends Component {
  render(){
    return (
        <div className="App">
          <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/login" component={Login} />
              <PrivateRoute path="/cafofos/:id" component={Adsinfo} />
              <PrivateRoute path="/cafofos" component={Adslist} />
              <PrivateRoute path="/register-cafofo" component={AdsRegister} />
              <Route path="/cadastro" component={UserRegister} />
              <Route path="/esqueci-a-senha" component={ForgotPassword} />
              <Route path="*" component={() => <h1>Page not found!</h1>} />
          </Switch>
        </div>
    );

  }
}

export default App;