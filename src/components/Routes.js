import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Home from './Home';
import Quotes from './Quotes';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/App" component={App} />
      <Route path="/" component={Home} />
      <Route path="/ Quotes" component={Quotes} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
