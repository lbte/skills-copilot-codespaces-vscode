// Create web server
// Create a web server that listens to requests on port 3000. When a client makes a request, the server should respond with a status code of 200 and the following JSON object: { "comments": [] }.

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify({ comments: [] }));
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

// Path: comments.js
// Add comments
// Update the server created in the previous exercise to add the ability to post comments. If the client makes a POST request to the server, the server should add the comment to the list of comments and respond with a status code of 200 and the following JSON object: { "status": "ok" }.

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', (data) => {
      body += data;
    });
    req.on('end', () => {
      const comment = JSON.parse(body);
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify({ status: 'ok' }));
    });
  } else {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({ comments: [] }));
  }
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

// Path: comments.js
// Get comments
// Update the server created in the previous exercise to add the ability to get comments. If the client makes a GET request to the server, the server should respond with a status code of 200 and the following JSON object: { "comments": [ "comment1", "comment2" ] }.

const http = require('http');

const comments = [];

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', (data) => {
      body += data;
    });
    req.on('end', () => {
      const comment = JSON.parse(body);
      comments.push(comment);
      res.writeHead(200, {'Content-Type': 'application/json