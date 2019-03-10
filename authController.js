const UserModel = require('./userModel')

exports.auth = function (req, res) {
    if (req.headers["authorization"] == undefined) res.sendStatus(403)
    const usercreds = new Buffer(req.headers["authorization"], 'base64')
        .toString('utf8')
        .split(":")

    UserModel.find({
        user: usercreds[0],
        password: usercreds[1]
    }, function (err, user) {
        if (err || user.length == 0) res.sendStatus(403)
        res.json({user})
    })
    
}