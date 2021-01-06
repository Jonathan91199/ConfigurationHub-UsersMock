var express = require('express');
var router = express.Router();
let userModel = require('../mongoDB/mongoSchema/UsersSchema')
let mongoose = require('mongoose')

router.get('/', function (req, res, next) {
  // const models = new userModel({
  //   userName: "Jonathan",
  //   userPassword: "9011j"
  // });
  console.log(req.params)
  // models.save(()=>{console.log("Saved")})
  userModel.find({}, function (asd, sss) {
    console.log(asd, sss)
  })
  res.send('respond with a resource');
});
console.log("asd")
module.exports = router;
