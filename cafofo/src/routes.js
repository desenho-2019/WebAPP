import React from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from "./services/auth";

import Login from './pages/login';
import Main from './pages/main';
import Adsinfo from './pages/adsinfo';

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

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <PrivateRoute path="/cafofos/:id" component={Adsinfo} />
            <Route path="/login" component={Login} />
            <Route path="*" component={() => <h1>Page not found!</h1>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;