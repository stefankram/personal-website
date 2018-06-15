const path = require('path');

module.exports = {
  PATHS: {
    ENTRY: path.join(process.cwd(), 'assets', 'index.html'),
    ASSETS: path.join(process.cwd(), 'assets'),
  },
  PORTS: {
    HTTP: process.env.HTTP_PORT || 8080,
    HTTPS: process.env.HTTPS_PORT || 8443,
  },
};
