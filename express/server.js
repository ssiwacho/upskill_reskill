'use strict';

var express = require('express');
const serverless = require('serverless-http');
var bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
var app = express();
var jwt = require('jsonwebtoken');  //https://npmjs.org/package/node-jsonwebtoken
//var expressJwt = require('express-jwt'); //https://npmjs.org/package/express-jwt
const router = express.Router();
const checkAuth = require('./check-auth');
const UserModel = require("./user");

var secret = 'XYZLQ3M0RKe6Bz6tYtU';
var mogoUrl = 'mongodb+srv://ssiwacho:<password>@cluster0.4j5ws.mongodb.net/test?retryWrites=true';

const mongoose = require("mongoose");


//mongoose.Promise = global.Promise;
mongoose.connect( mogoUrl,
    { useNewUrlParser: true }
);



app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use('/', express.static(__dirname + '/dist'));
//app.use('/', express.static(path.join(__dirname, 'dist')));

// router.get('/', (req, res) => {
//   //console.log('ok');
//   res.sendFile(path.join(__dirname, '../dist/homepage.html'));
// });

router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from Express.js!</h1>');
  res.end();
});


router.post('/login', function (req, res) {
  UserModel.findOne({
    username: req.body.username,
    password: req.body.password
  }).exec(function (err, user) {
    if (!err && user) {
      let token = jwt.sign({ username: user.username }
        , secret, { expiresIn: "1d" });
      // user.token = token;
      // user.save();
      res.json({ token: token });
    } else {
      res.status(401).send('Wrong user or password');
    }
  });
});


router.get('/api/profile', checkAuth, function (req, res) {
  // console.log('user ' + req.user.firstname + ' is calling /api/profile');
  // res.json({
  //   name: req.user.firstname
  // });
  res.json({
    status: "Auth Success"
  })
});

// We are going to protect /api routes with JWT
//app.use('/api', expressJwt({secret: secret}));

app.use(function (err, req, res, next) {
  if (err.constructor.name === 'UnauthorizedError') {
    res.status(401).send('Unauthorized');
  }
});


app.use('/.netlify/functions/server', router);  // path must route to lambda
//app.use('/', router);

//app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../dist/index2.html')));



module.exports = app;
module.exports.handler = serverless(app);

// 'use strict';
// const express = require('express');
// const serverless = require('serverless-http');
// const app = express();
// const bodyParser = require('body-parser');

// const router = express.Router();
// router.get('/', (req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   res.write('<h1>Hello from Express.js!</h1>');
//   res.end();
// });
// router.get('/another', (req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   res.write('<h1>Hello Another from Express.js!</h1>');
//   res.end();
// });
// router.post('/', (req, res) => res.json({ postBody: req.body }));

// app.use(bodyParser.json());
// app.use('/.netlify/functions/server', router);  // path must route to lambda
// //app.use('/', router);  

// module.exports = app;
// module.exports.handler = serverless(app);