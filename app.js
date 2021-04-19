'use strict';

const express = require('express');
const bodyParser = require ('body-parser')
const localApp = require ("./helloworld")
const path = require('path');
const { send } = require('process');
const request = require('request');
const https = require('https')
const axios = require('axios')
const FormData = require('form-data');
const http = require ('http')
var os = require('os');


// Constants
const PORT = 5000;
const HOST = os.hostname();

//var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({extended: false})

// App 
const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname +'/templates/index.html'));
});

app.post('/dbsave', urlencodedParser, (req, res) => {
  //console.log(req);

  //----------------------------------------------

  // const data = JSON.stringify({
  //   taskname: req.body.name,
  //   taskvalue: req.body.value
  // })

  // //HTTPS Options
  // const options = {
  //   hostname: 'localhost',
  //   port: 3000,
  //   path: '/dbsave',
  //   method: 'POST',
  //   rejectUnauthorized: false,
  //   requestCert: false,
  //   agent: false,
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Content-Length': data.length
  //   }
  // }

  // const req1 = https.request(options, res1 => {
  //   console.log(`statusCode: ${res.statusCode}`)
  
  //   res1.on('data', d => {
  //     process.stdout.write(d)
  //   })
  // })
  
  // req1.on('error', error => {
  //   console.error(error)
  // })
  
  // req1.write(data)
  // req1.end()
  //----------------------------------------------------


//--------------------------------------------------------
const data = JSON.stringify({
  taskname: req.body.name,
  taskvalue: req.body.value
})

//HTTP Options
var options = {
  host: 'taskme-db-service',
  port: 3000,
  path: '/dbsave',
  method: 'POST',
  headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      //'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(data)
  }
};

var req10 = http.request(options, function(res10) {
    res10.setEncoding('utf8');
    res10.on('data', function (chunk) {
        console.log("body: " + chunk);
    });
});

req10.write(data);
req10.end();
//---------------------------------------------------------



  //------------------------------------------------------
  // const formData = new FormData();

  // formData.append ("taskname", req.body.name)
  // formData.append ("taskvalue", req.body.value)

  // let axiosConfig = {
  //   headers: {
  //       'Content-Type': 'application/json;charset=UTF-8',
  //       "Access-Control-Allow-Origin": "*",
  //   }
  // };

  // const body = { 'username' : 'password' };

  // axios.post('http://localhost:3000/dbsave', body, axiosConfig)
  // .then(res55 => console.log(res))
  // .catch(err => console.log('Login: ', err));
  

  // axios
  // .post('http://localhost:3000/dbsave', formData, {
  //   //Test
  // })
  // .then(res1 => {
  //   console.log(`statusCode: ${res1.statusCode}`)
  //   console.log(res1)
  // })
  // .catch(error => {
  //   console.error(error)
  // })
//----------------------------------------------------------


  res.send(localApp.updateRequest ("Saved To DB ","Layer"));
});



app.post('/load', urlencodedParser, (req, res) => {

  //-------------------------------------------------------------------------------
  // request('http://localhost:3000/load', { json: true }, (err, res, body) => {
  //   if (err) { return console.log(err); }
  //   console.log(body.url);
  //   console.log(body.explanation);
  // })
  //-------------------------------------------------------------------------------

  //-------------------------------------------------------------------------------
  axios
  .get('http://taskme-db-service:3000/load', {
    todo: 'Buy the milk'
  })
  .then(res1 => {
    console.log(`statusCode: ${res1.statusCode}`)
    console.log(res1)
  })
  .catch(error => {
    console.error(error)
  })

  res.sendFile(path.join(__dirname +'/templates/index.html'));
  //res.send(localApp.updateRequest ("Load:","Layer"));
});
//-----------------------------------------------------------------------------------

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);