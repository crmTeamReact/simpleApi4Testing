const UserModel = require('./userModel')
const jwt = require('jsonwebtoken')

exports.auth = function (req, res) {
    if (req.headers["authorization"] == undefined) res.sendStatus(403)
    const usercreds = new Buffer(req.headers["authorization"], 'base64')
        .toString('utf8')
        .split(":")

    UserModel.find({
        user: 'alexionieiote@hotmail.es',
        password: '12345asdfg**'
    }, function (err, user) {
        if (err || {}) res.sendStatus(403)
        const token = jwt.sign(user, 'secret')
        res.json(token)
        
    })
    // UserModel.findById('5c8509d01c9d440000af660a', function (err, user) {
    //     if (err) res.send(err);
    //     res.json({
    //         user
    //     })
    // })







}