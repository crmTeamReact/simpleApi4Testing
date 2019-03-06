// Import contact model
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

// Handle create contact actions
exports.new = function (req, res) {
    let album = new AlbumsModel();
    album.userId = req.body.userId;
    album.id = req.body.id;
    album.title = req.body.title;

    // save the contact and check for errors
    album.save(function (err, docs) {
        //if (err) res.json(err);
        res.json({
            message: 'New contact created!',
            data: docs
        });
    });
};

//Handle create multiple contacts
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

// Handle view contact info
// exports.view = function (req, res) {
//     Contact.findById(req.params.contact_id, function (err, contact) {
//         if (err)
//             res.send(err);
//         res.json({
//             message: 'Contact details loading..',
//             data: contact
//         });
//     });
// };

// // Handle update contact info
// exports.update = function (req, res) {

//     Contact.findById(req.params.contact_id, function (err, contact) {
//         if (err)
//             res.send(err);

//         contact.name = req.body.name ? req.body.name : contact.name;
//         contact.gender = req.body.gender;
//         contact.email = req.body.email;
//         contact.phone = req.body.phone;

//         // save the contact and check for errors
//         contact.save(function (err) {
//             if (err)
//                 res.json(err);
//             res.json({
//                 message: 'Contact Info updated',
//                 data: contact
//             });
//         });
//     });
// };

// // Handle delete contact
// exports.delete = function (req, res) {
//     Contact.remove({
//         _id: req.params.contact_id
//     }, function (err, contact) {
//         if (err)
//             res.send(err);

//         res.json({
//             status: "success",
//             message: 'Contact deleted'
//         });
//     });
// };