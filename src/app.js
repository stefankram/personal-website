const http = require('http');
const Server = require('./server');
const { PORTS } = require('./server/config/constants');

const app = new Server();
const httpServer = http.createServer(app);

httpServer.listen(PORTS.HTTP);
httpServer.on('listening', () => {
  console.log(`Listening on port: ${PORTS.HTTP}`);
});
httpServer.on('error', (err) => {
  console.log(`Something bad happened: ${JSON.stringify(err)}`);
});
httpServer.on('connection', (socket) => {
  // Perhaps perform logging?
});
