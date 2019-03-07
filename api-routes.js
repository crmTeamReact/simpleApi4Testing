// Initialize express router
let router = require('express').Router();
let contactController = require('./contactController');

// Set default API response
// router.get('/', function (req, res) {
//     res.json({
//         status: 'API Its Working',
//         message: 'Welcome to RESTHub crafted with love!',
//     });
// });

// Import contact controller

// Contact routes
router.route('/albums')
    .get(contactController.index)
    .post(contactController.new);

router.route('/albums/bulk')
    .post(contactController.insertMany)
    .delete(contactController.deleteAll);

router.route('/albums/:contact_id')
    .get(contactController.view)
    .put(contactController.update)
    .patch(contactController.update)
    .delete(contactController.delete);

// Export API routes
module.exports = router;