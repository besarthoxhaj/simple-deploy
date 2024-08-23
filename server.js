/**
 *
 *
 *
 */
const http = require('http');


/**
 *
 *
 *
 */
const server = http.createServer((req, res) => {
  console.log('Request received');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Javascript');
});


/**
 *
 *
 *
 */
server.listen(3080, () => {
  console.log('Running...');
});
