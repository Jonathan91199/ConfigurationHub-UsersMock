let userModel = require('../mongoSchema/UsersSchema')

module.exports = function AddNewUser(req, res) {
    console.log("asd")
    const PARAMETERS = req.body

    let newUserModel = new userModel({
        "firstName": PARAMETERS.firstName,
        "lastName": PARAMETERS.lastName,
        "emailAddress": PARAMETERS.emailAddress,
        "userName": PARAMETERS.userName,
        "userPassword": PARAMETERS.password
    })
    console.log(newUserModel)

    newUserModel.save(() => {
        console.log("New User Has Been Succefully Saved")
        res.end()
    })
}