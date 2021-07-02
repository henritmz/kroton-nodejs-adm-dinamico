module.exports = {
  index: function(req, res) {
    res.render('home/index');
  },
  cards: function(req, res) {
    res.render('home/cards');
  },
  charts: function(req, res) {
    res.render('home/cards');
  },
  buttons: function(req, res) {
    res.render('home/buttons');
  },
  others: function (req, res) {
     res.render('home/others');
  },
  utilities_animation: function (req, res) {
    res.render('home/utilities-animation');
  },
  blank: function(req, res) {
    res.render('home/blank');
  },
  tables: function(req, res) {
    res.render('home/tables');
  },
  login: function(req, res) {
    res.render('home/login');
  },
  forgotPassword: function(req, res) {
    res.render('home/forgot-password');
  },
  register: function(req, res) {
    res.render('home/register');
  },
  utilitiesBorder: function(req, res) {
    res.render('home/utilities-border');
  },
  color: function(req, res) {
    res.render('home/color');
  },
}