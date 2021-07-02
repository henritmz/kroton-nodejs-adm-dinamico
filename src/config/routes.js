var express = require('express');
var router = express.Router();
const HomeController = require("../controllers/home_controller")
const LoginMiddleware = require("../middlewares/login")

router.get('/login', HomeController.login);
router.get('/forgot-password', HomeController.forgotPassword);
router.get('/register', HomeController.register);
router.get('/logar', HomeController.logar);
router.get('/logout', HomeController.logout);

router.get('/', LoginMiddleware, HomeController.index);
router.get('/cards', LoginMiddleware, HomeController.cards);
router.get('/charts', LoginMiddleware, HomeController.charts);
router.get('/buttons', LoginMiddleware, HomeController.buttons);
router.get('/utilities-other', LoginMiddleware, HomeController.others);
router.get('/utilities-animation', LoginMiddleware, HomeController.utilities_animation);
router.get('/blank', LoginMiddleware, HomeController.blank);
router.get('/tables', LoginMiddleware, HomeController.tables);
router.get('/utilities-border', LoginMiddleware, HomeController.utilitiesBorder);
router.get('/utilities-color', LoginMiddleware, HomeController.color);

module.exports = router;
