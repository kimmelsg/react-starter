import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Index from '../views/index';
import About from '../views/about';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={() => <Index name="Zach" />} />
      <Route path="/about/:name" component={About} />
    </Switch>
  </BrowserRouter>
);
