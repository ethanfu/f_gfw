/**
 * Created by ethan on 15/1/3.
 */

var http = require("http"),
    https = require("https"),
    fs = require("fs"),
    url = require("url"),
    Buffer = require('buffer').Buffer,
    Stream = require("stream");

var options = {
    key: fs.readFileSync("./keys/server.key"),
    cert: fs.readFileSync("./keys/server.crt")
}

https.createServer(options, function (req, res) {
    res.writeHead(200);
    res.end("Hello world!")
}).listen(443);