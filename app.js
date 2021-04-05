'use strict';

const express = require('express');
const bodyParser = require ('body-parser')
const localApp = require ("./helloworld")
const path = require('path');

// Constants
const PORT = 5000;
const HOST = 'localhost';

//var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({extended: false})

// App  
const app = express();
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname +'/templates/index.html'));
});

app.post('/dbsave', urlencodedParser, (req, res) => {
  //console.log(req);
  res.send(localApp.updateRequest ("Returned From DB ","Layer"));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);