const url = require('url');
const helper = require('./helper');

var routes = {
    '/cat' : require('./endpointhandler/cat'),
    '/dog' : require('./endpointhandler/dog')
}

module.exports = function(req, res) {
    var requestUrl = routes[req.url];
    if(requestUrl) {
        requestUrl(res);
    } else {
        res.writeHead(404, {'content-type':'text/plain'});
        res.end('Siden findes ikke.');
    }
}