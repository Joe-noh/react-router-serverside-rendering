import React from 'react'
import ReactDOMServer from 'react-dom/server'
import {match, RoutingContext} from 'react-router'
import express from 'express'

import routes from './app/routes'

let app = express();

app.use(express.static('public'));

app.use((req, res) => {
  match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      res.status(200).send(ReactDOMServer.renderToString(<RoutingContext {...renderProps} />));
    } else {
      res.status(404).send('Not found');
    }
  });
});

app.listen(3000);
