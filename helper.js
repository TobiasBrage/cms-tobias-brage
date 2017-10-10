exports.respond = function(res, message, status = 200){
    res.writeHead(status, {'content-type':'text/plain'});
    res.end(message);
}