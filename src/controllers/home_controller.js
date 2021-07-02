const Cookie = require("../helpers/cookie")

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
    res.render('home/login', {erro: undefined});
  },
  logar: function(req, res) {
    const email = req.query.email
    const senha = req.query.senha
    const lembrar = req.query.lembrar

    if(email === "kroton@gama.com" && senha === "123456"){
      let minutos = lembrar === "on" ? (24 * 60) : 60;
      Cookie.set(res, "usuario", JSON.stringify({email: email}), minutos)
      return res.redirect("/")
    }

    res.render('home/login', {erro: "Login ou senha inválidos"});
  },
  logout: function(req, res) {
    Cookie.remove(res, "usuario")
    res.redirect("/login")
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