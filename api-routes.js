// Initialize express router
const router = require('express').Router();
const contactController = require('./contactController');
const authController = require('./authController')

// Contact routes
router.route('/auth/token')
    .get(authController.auth)

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