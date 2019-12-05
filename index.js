const express = require('express');
const app = express();
const routes = require('./config/routes');
const BASE_PATH = '/api';

app.use('/', (req, res, next) => {
  console.log(`Executing ${req.method} ${req.originalUrl}`);

  next();
});

routes.forEach(route => {
  app.use(`${BASE_PATH}${route.path}`, route.router);
});

app.listen(45000, () => {
  console.log('App listening to port 45000.');
});
