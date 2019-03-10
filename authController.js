const UserModel = require('./userModel')

exports.auth = function (req, res) {
    // if (req.headers["authorization"] == undefined) res.sendStatus(403)
    // const usercreds = new Buffer(req.headers["authorization"], 'base64')
    //     .toString('utf8')
    //     .split(":")

    UserModel.find({
        user: 'alexionieiote@hotmail.es',
        password: '12345asdfg**'
    }, function (err, user) {
        if (err) res.sendStatus(403)
        res.json({user: user})
    })
    
}