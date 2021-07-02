const Cookie = require("../helpers/cookie")

module.exports = (req, res, next) => {
  let usuario = Cookie.get(req, "usuario");

  if(!usuario) return res.redirect("/login");
  
  usuario = unescape(usuario);
  
  try{
    usuario = JSON.parse(usuario);
  }
  catch(e){
    return res.redirect("/login");
  }

  req.usuarioLogado = usuario;
  next();
}