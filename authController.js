exports.auth = function (req, res) {
    const usercreds = new Buffer(
            req.headers["authorization"].split(" ")[1],
            'base64'
        )
        .toString('utf8')
        .split(":")

    res.json({
        user: usercreds[0],
        password: usercreds[1]
    })
}