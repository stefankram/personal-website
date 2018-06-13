const express = require('express');
const path = require('path');

module.exports = {
  app: () => {
    const app = express();
    const htmlEntry = path.join(__dirname, '../../assets/index.html');
    const publicPath = express.static(path.join(__dirname, '../../assets'));

    app.use('/assets', publicPath);
    app.get('/home', (_, res) => res.sendFile(htmlEntry));

    return app;
  },
};
