/**
 * Created by sleepbear on 2015. 12. 3..
 */
var http = require('http');
var static = require('node-static');
var fileServer = new(static.Server)();
http.createServer(function (req, res) {
    fileServer.serve(req, res);
}).listen(1337, '127.0.0.1');