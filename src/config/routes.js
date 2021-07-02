var express = require('express');
var router = express.Router();
const HomeController = require("../controllers/home_controller")

router.get('/', HomeController.index);
router.get('/login', HomeController.login);
router.get('/cards', HomeController.cards);
router.get('/charts', HomeController.charts);
router.get('/buttons', HomeController.buttons);
router.get('/utilities-other', HomeController.others);
router.get('/blank', HomeController.blank);
router.get('/forgot-password', HomeController.forgotPassword);
router.get('/register', HomeController.register);
router.get('/utilities-border', HomeController.utilitiesBorder);
router.get('/utilities-color', HomeController.color);

module.exports = router;
