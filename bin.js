/**
 * Created by ethan on 15/1/3.
 */

var http = require("http"),
    https = require("https"),
    net = require("net"),
    fs = require("fs"),
    url = require("url"),
    pathUtil = require("path"),
    zlib = require('zlib'),
    async = require('async'),
    color = require("colorful"),
    Buffer = require('buffer').Buffer,
    Stream = require("stream");