var express = require('express');
var router = express.Router();
let userModel = require('../mongoDB/mongoSchema/UsersSchema')
let mongoose = require('mongoose')

router.get('/', function (req, res, next) {


  res.send('respond with a resource');
});
module.exports = router;
