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
  blank: function(req, res) {
    res.render('home/blank');
  },
  login: function(req, res) {
    res.render('home/login');
  },
}