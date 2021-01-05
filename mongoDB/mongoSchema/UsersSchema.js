
let mongoose = require('mongoose')
let Schema = mongoose.Schema

const userSchema = new Schema({
    userName : String,
    userPassword : String,
}, {collation : "Users"})

const userModel = mongoose.model("Users", userSchema)
module.exports  = userModel