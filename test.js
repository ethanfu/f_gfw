/**
 *
 * Created by ethan on 15/1/3.
 */

var http = require("http");

options = {
    hostname: 'www.facebook.com',
    path: "/",
    method: "GET"
}

var req = http.request(options, function ( res) {
    res.setEncoding('utf-8');
    res.on('data', function (d) {
        console.log(d);
    });
});

req.end();

req.on('error', function (e) {
    console.log(e);
})