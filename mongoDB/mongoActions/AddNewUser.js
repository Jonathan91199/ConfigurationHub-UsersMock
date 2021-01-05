const userModel = require('../mongoSchema/UsersSchema')

module.exports = function AddNewUser(req, res) {
    const sentUserName = req.body.userName
    const sentUserPassword = req.body.userPassword

    const newUserModel = new userModel({
        userName: sentUserName,
        userPassword: sentUserPassword
    })

    newUserModel.save(() => {
        console.log("New User Has Been Succefully Saved")
        res.end()
    })
}