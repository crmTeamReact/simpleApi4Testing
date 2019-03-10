const UserModel = require('./userModel')
const AlbumsModel = require('./contactModel');

exports.auth = function (req, res) {
    if (req.headers["authorization"] == undefined) res.sendStatus(403)
    const usercreds = new Buffer(req.headers["authorization"], 'base64')
        .toString('utf8')
        .split(":")

    AlbumsModel.find({
        // user: usercreds[0],
        // password: usercreds[1]
    }, function (err, user) {
        if (err) res.sendStatus(403)
        res.json({
            user
        })
    })
    // UserModel.findById('5c8509d01c9d440000af660a', function (err, user) {
    //     if (err) res.send(err);
    //     res.json({
    //         user
    //     })
    // })







}