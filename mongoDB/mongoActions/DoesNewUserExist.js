var userModel = require('../mongoSchema/UsersSchema')

module.exports = function DoesNewUserExist(req, res) {
    const PARAMETERS = req.body
    userModel.findOne({ $or:[ {'userName':PARAMETERS.userName}, {'emailAddress':PARAMETERS.emailAddress}]}, function (err, dataBaseResult) {
       if(dataBaseResult !==null){
           PARAMETERS.userName === dataBaseResult.userName ? res.send([true, "User Name Taken"]) : res.send([true, "There Is a ConfigurationHub User With This User"])
       } else res.send([false])
       
    })
}