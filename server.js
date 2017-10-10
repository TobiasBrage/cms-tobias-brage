const http = require('http');
const route = require('./route');

http.createServer(route).listen(1337);
console.log('Server startet på port: 1337.');