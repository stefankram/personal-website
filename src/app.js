const Server = require('./server');

const port = process.env.PORT || 8080;
const app = Server.app();

app.listen(port);

console.log(`Listening on https://localhost:${port}`);
