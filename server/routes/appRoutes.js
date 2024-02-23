const router = require('express').Router();
const appControllers = require('../controllers/appControllers');

router.get('/', appControllers.getAllUsersData);
router.post('/register', appControllers.addUsersData);

module.exports = router;
