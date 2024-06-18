const express =  require('express');
const { loginController, registerController } = require('../controllers/userController');

//router obj
const router = express.Router();

//routers
//POST || LOGIN User
router.post('/login',loginController);

//POST || Register User
router.post('/register',registerController);
module.exports = router;