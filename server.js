var express = require("express");
var bodyParser = require('body-parser');
var exec = require('child_process').exec;
var app = express();
var port = 8081;
var moveForward = './moving-commands/forward.sh';
var moveLeft = './moving-commands/left.sh';
var moveRight = './moving-commands/right.sh';
var moveReverse = './moving-commands/reverse.sh';
var moveStop = './moving-commands/stop.sh';
var turnLightsOn = './light-controls/lighton.sh';
var turnLightsOff = './light-controls/lightoff.sh';
var speedNone = './speed-controls/nospeed.sh';
var speedHigh = './speed-controls/highspeed.sh';
var speedNormal = './speed-controls/regularspeed.sh';
var speedLow = './speed-controls/lowspeed.sh';
app.use(bodyParser.json());
app.get('/forward', function (req, res) {
    var command = exec("sh " + moveForward);
    command.stdout.on('data', function (data) {
        res.send("forward");
        res.end();
    });
    command.stderr.on('data', function (data) {
        console.log('error', data);
        res.status(500).send({ error: data });
    });
});
app.get('/left', function (req, res) {
    var command = exec("sh " + moveLeft);
    command.stdout.on('data', function (data) {
        res.send("left");
        res.end();
    });
    command.stderr.on('data', function (data) {
        console.log('error', data);
        res.status(500).send({ error: data });
    });
});
app.get('/right', function (req, res) {
    var command = exec("sh " + moveRight);
    command.stdout.on('data', function (data) {
        res.send("left");
        res.end();
    });
    command.stderr.on('data', function (data) {
        console.log('error', data);
        res.status(500).send({ error: data });
    });
});
app.get('/reverse', function (req, res) {
    var command = exec("sh " + moveReverse);
    command.stdout.on('data', function (data) {
        res.send("left");
        res.end();
    });
    command.stderr.on('data', function (data) {
        console.log('error', data);
        res.status(500).send({ error: data });
    });
});
app.get('/stop', function (req, res) {
    var command = exec("sh " + moveStop);
    command.stdout.on('data', function (data) {
        res.send("left");
        res.end();
    });
    command.stderr.on('data', function (data) {
        console.log('error', data);
        res.status(500).send({ error: data });
    });
});
app.get('/lightsOn', function (req, res) {
    console.log("turnLightsOn");
    var command = exec("sh " + turnLightsOn);
    command.stdout.on('data', function (data) {
        res.send("left");
        res.end();
    });
    command.stderr.on('data', function (data) {
        console.log('error', data);
        res.status(500).send({ error: data });
    });
});
app.get('/lightsOff', function (req, res) {
    console.log("turnLightsOn");
    var command = exec("sh " + turnLightsOff);
    command.stdout.on('data', function (data) {
        res.send("left");
        res.end();
    });
    command.stderr.on('data', function (data) {
        console.log('error', data);
        res.status(500).send({ error: data });
    });
});
app.get('/speedNone', function (req, res) {
    console.log("turnLightsOn");
    var command = exec("sh " + speedNone);
    command.stdout.on('data', function (data) {
        res.send("left");
        res.end();
    });
    command.stderr.on('data', function (data) {
        console.log('error', data);
        res.status(500).send({ error: data });
    });
});
app.get('/speedHigh', function (req, res) {
    console.log("turnLightsOn");
    var command = exec("sh " + speedHigh);
    command.stdout.on('data', function (data) {
        res.send("left");
        res.end();
    });
    command.stderr.on('data', function (data) {
        console.log('error', data);
        res.status(500).send({ error: data });
    });
});
app.get('/speedNormal', function (req, res) {
    console.log("turnLightsOn");
    var command = exec("sh " + speedNormal);
    command.stdout.on('data', function (data) {
        res.send("left");
        res.end();
    });
    command.stderr.on('data', function (data) {
        console.log('error', data);
        res.status(500).send({ error: data });
    });
});
app.get('/speedLow', function (req, res) {
    console.log("turnLightsOn");
    var command = exec("sh " + speedLow);
    command.stdout.on('data', function (data) {
        res.send("left");
        res.end();
    });
    command.stderr.on('data', function (data) {
        console.log('error', data);
        res.status(500).send({ error: data });
    });
});
app.listen(port, function () {
    console.log("listening on port " + port);
});
//# sourceMappingURL=server.js.map