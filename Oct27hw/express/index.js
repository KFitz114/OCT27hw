const express = require('express');
const axios = require('axios');

const app = express();

app.listen("3400", () => {
    console.log('App listening on port 3400');
})

app.get('/', function(req, res) {
    console.log('Express: ', res);
    console.log('DIRNAME: ', __dirname);
    res.sendFile(__dirname + '/index.html');
})
app.get('/something', function(req, res)   {
    console.log("Message ROUTE");
    res.send({message: 'look ma I made a route! '});
})
app.get('/next', function(req, res)  {
    console.log("MESSAGE ROUTE");
    res.send({message: 'These are pretty easy'});
})
app.get('/posts', function(req, res) {
    axios.get('http://jsonplaceholder.typicode.com/posts')
    .then(results => {
        res.json(results.data);
    })
})