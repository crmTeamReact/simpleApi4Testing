const UserModel = require('./userModel')
const jwt = require('jsonwebtoken')

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
        jwt.sign({user}, 'secret_key', function(err, token){
            res.json({token})

        })
    })
    
}