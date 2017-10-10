module.exports = function(req, res) {
    res.writeHead(200, {'content-type':'text/plain'});
    res.end('Hello World');
}