import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import About from '../pages/about';
import Index from '../pages/index/index';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={() => <Index name="Zach" />} />
      <Route path="/about/:name" component={About} />
    </Switch>
  </BrowserRouter>
);
