var userModel = require('../mongoSchema/UsersSchema')

module.exports = function DoesUserExist(req, res) {
    const PASSWORD = req.body.password
    const USERNAME = req.body.userName
    console.log(USERNAME, PASSWORD)
    userModel.findOne({ userName: USERNAME, userPassword: PASSWORD }, function (err, dataBaseResult) {
        dataBaseResult !== null ? res.send([true, dataBaseResult]) : res.send([false])
    })
}