import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
} from 'react-apollo';

import About from '../pages/about';
import Index from '../pages/index/index';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://graphql.example.com',
  }),
});

export default () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={() => <Index name="Zach" />} />
        <Route path="/about/:name" component={About} />
      </Switch>
    </BrowserRouter>
  </ApolloProvider>
);
