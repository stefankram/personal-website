const express = require('express');
const apiRouter = require('./api');
const { PATHS } = require('./config/constants');

function Server() {
  const app = express();

  app.use('/assets', express.static(PATHS.ASSETS));
  app.use('/api', apiRouter);
  app.get('*', (_, res) => res.sendFile(PATHS.ENTRY));

  return app;
}

module.exports = Server;
