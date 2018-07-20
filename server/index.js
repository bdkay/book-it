// Mounts Mini Node Server

const http = require('http');
const fs = require('fs');
const express = require('express');

// const server = http.createServer();
//
// server.on('request', (req, res) => {
//   // Write and end on the same line with .end
//   res.end(fs.readFileSync(__dirname + '/../client/index.html'));
// });
//
// server.listen(8080);

const app = express();

app.use(express.static('client'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {
    content: 'Hello EJS'
  });
});

// app.get('/', (req, res) => {
//
// });

// App is a wrapper around our server object
app.listen(8080, () => console.log('Server is running'));
