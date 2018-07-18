// Mini Node Server

// http comes with node
const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on('request', (req, res) => {
  // Write and end on the same line with .end
  res.end(fs.readFileSync(__dirname + '/../client/index.html'));
});

server.listen(8080);
