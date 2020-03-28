const express = require("express");
var bodyParser = require('body-parser');
const { exec } = require('child_process');

const app = express();
let port = 8081;

const moveForward = './moving-commands/forward.sh';
const moveLeft = './moving-commands/left.sh';
const moveRight = './moving-commands/right.sh';
const moveReverse = './moving-commands/reverse.sh';
const moveStop = './moving-commands/stop.sh';

const turnLightsOn = './light-controls/lighton.sh';
const turnLightsOff = './light-controls/lightoff.sh';

const speedNone = './speed-controls/nospeed.sh';
const speedHigh = './speed-controls/highspeed.sh';
const speedNormal = './speed-controls/regularspeed.sh';
const speedLow = './speed-controls/lowspeed.sh';


app.use(bodyParser.json());


app.get('/forward',(req,res)=>{
    let command = exec(`sh ${moveForward}`);
    command.stdout.on('data', (data)=>{
        res.send("forward");
        res.end();
    });
    command.stderr.on('data', (data)=>{
        console.log('error',data);
        res.status(500).send({ error: data })
    });
});

app.get('/left',(req,res)=>{
    let command = exec(`sh ${moveLeft}`);
    command.stdout.on('data', (data)=>{
        res.send("left");
        res.end();
    });
    command.stderr.on('data', (data)=>{
        console.log('error',data);
        res.status(500).send({ error: data })
    });
});

app.get('/right',(req,res)=>{
    let command = exec(`sh ${moveRight}`);
    command.stdout.on('data', (data)=>{
        res.send("left");
        res.end();
    });
    command.stderr.on('data', (data)=>{
        console.log('error',data);
        res.status(500).send({ error: data })
    });
});

app.get('/reverse',(req,res)=>{
    let command = exec(`sh ${moveReverse}`);
    command.stdout.on('data', (data)=>{
        res.send("left");
        res.end();
    });
    command.stderr.on('data', (data)=>{
        console.log('error',data);
        res.status(500).send({ error: data })
    });
});

app.get('/stop',(req,res)=>{
    let command = exec(`sh ${moveStop}`);
    command.stdout.on('data', (data)=>{
        res.send("left");
        res.end();
    });
    command.stderr.on('data', (data)=>{
        console.log('error',data);
        res.status(500).send({ error: data })
    });
});

app.get('/lightsOn',(req,res)=>{
    console.log("turnLightsOn");
    let command = exec(`sh ${turnLightsOn}`);
    command.stdout.on('data', (data)=>{
        res.send("left");
        res.end();
    });
    command.stderr.on('data', (data)=>{
        console.log('error',data);
        res.status(500).send({ error: data })
    });
});

app.get('/lightsOff',(req,res)=>{
    console.log("turnLightsOn");
    let command = exec(`sh ${turnLightsOff}`);
    command.stdout.on('data', (data)=>{
        res.send("left");
        res.end();
    });
    command.stderr.on('data', (data)=>{
        console.log('error',data);
        res.status(500).send({ error: data })
    });
});

app.get('/speedNone',(req,res)=>{
    console.log("turnLightsOn");
    let command = exec(`sh ${speedNone}`);
    command.stdout.on('data', (data)=>{
        res.send("left");
        res.end();
    });
    command.stderr.on('data', (data)=>{
        console.log('error',data);
        res.status(500).send({ error: data })
    });
});

app.get('/speedHigh',(req,res)=>{
    console.log("turnLightsOn");
    let command = exec(`sh ${speedHigh}`);
    command.stdout.on('data', (data)=>{
        res.send("left");
        res.end();
    });
    command.stderr.on('data', (data)=>{
        console.log('error',data);
        res.status(500).send({ error: data })
    });
});

app.get('/speedNormal',(req,res)=>{
    console.log("turnLightsOn");
    let command = exec(`sh ${speedNormal}`);
    command.stdout.on('data', (data)=>{
        res.send("left");
        res.end();
    });
    command.stderr.on('data', (data)=>{
        console.log('error',data);
        res.status(500).send({ error: data })
    });
});

app.get('/speedLow',(req,res)=>{
    console.log("turnLightsOn");
    let command = exec(`sh ${speedLow}`);
    command.stdout.on('data', (data)=>{
        res.send("left");
        res.end();
    });
    command.stderr.on('data', (data)=>{
        console.log('error',data);
        res.status(500).send({ error: data })
    });
});

app.listen(port,function(){
    console.log(`listening on port ${port}`);
});