/**
 * Created by ethan on 15/1/3.
 */

var https = require('https'),
    fs = require('fs');

var options = {
    hostname: 'fuxueliang.com',
    port: 443,
    path: "/",
    method: "GET",
    rejectUnauthorized:false,
    key: fs.readFileSync('./keys/client.key'),
    cert: fs.readFileSync('./keys/client.crt'),
    ca: [fs.readFileSync('./keys/ca.crt')]
};

options.userAgent = new https.Agent(options);

var req = https.request(options, function(res) {
    res.setEncoding('utf-8');
    res.on('data', function (d) {
       console.log(d);
    });

});

req.end();

req.on('error', function (e) {
    console.log(e);
})
