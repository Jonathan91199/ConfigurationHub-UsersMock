
let mongoose = require('mongoose')
let Schema = mongoose.Schema

const userSchema = new Schema({
    firstName : String,
    lastName : String,
    emailAddress : String,
    userName : String,
    userPassword : String,
}, {collation : "users"})

const userModel = mongoose.model("users", userSchema)
module.exports  = userModel