// Import album model
AlbumsModel = require('./contactModel');

// Handle index actions
exports.index = function (req, res) {
    AlbumsModel.find({}, function (err, albums) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Contacts retrieved successfully",
            data: albums
        });
    });
};

// Handle create album actions
exports.new = function (req, res) {
    let album = new AlbumsModel();
    album.userId = req.body.userId;
    album.id = req.body.id;
    album.title = req.body.title;

    // save the album and check for errors
    album.save(function (err, doc) {
        if (err) res.json(err);
        res.json({
            message: 'New Album created!',
            data: doc
        });
    });
};

//Handle create multiple album
exports.insertMany = function (req, res) {
    let arr = req.body;
    AlbumsModel.insertMany(arr, function (err, docs) {
        if (err) res.json(err);
        res.json({
            message: 'all items added to db!',
            data: docs
        });
    });
}

//Handle view album info
exports.view = function (req, res) {
    AlbumsModel.findById(req.params.contact_id, function (err, doc) {
        if (err) res.send(err);
        res.json({
            message: 'Album details loading..',
            data: doc
        });
    });
};

// Handle update album info
exports.update = function (req, res) {

    AlbumsModel.findById(req.params.contact_id, function (err, album) {
        if (err) res.send(err);

        album.userId = req.body.userId || album.userId;
        album.id = req.body.id || album.id
        album.title = req.body.title || album.title;

        // save the contact and check for errors
        album.save(function (err, album) {
            if (err) res.json(err);
            res.json({
                message: 'Album Info updated',
                data: album
            });
        });
    });
};

// Handle delete contact
exports.delete = function (req, res) {
    AlbumsModel.deleteOne({
        _id: req.params.contact_id
    }, function (err, album) {
        if (err) res.send(err);

        res.json({
            status: "success",
            message: 'Album deleted',
            album: album
        });
    });
};