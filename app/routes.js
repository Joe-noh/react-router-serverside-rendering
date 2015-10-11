import React from 'react'
import {Router, Route} from 'react-router'

import App from './components/App'
import PageA from './components/PageA'

const routes = (
  <Router>
    <Route path="/" component={App}>
      <Route path="/page_a" component={PageA} />
    </Route>
  </Router>
);

export default routes;
