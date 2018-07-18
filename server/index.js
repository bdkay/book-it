// Mini Node Server

// http comes with node
const http = require('http');

const server =  http.createServer();

server.on('request', (req, res) => {
  res.write("Hello Node!");
  res.end();
});

server.listen(8080);
