module.exports = {
  get: (request, key) => {
    let cookieParse = {},
      rc = request.headers.cookie;
  
    rc && rc.split(';').forEach(function( cookie ) {
      let parts = cookie.split('=');
      cookieParse[parts.shift().trim()] = decodeURI(parts.join('='));
    });
  
    return cookieParse[key];
  },
  set: (response, key, value, minutos) => {
    response.cookie(key, value, { maxAge: (minutos * 60 * 1000), httpOnly: false }); // 2 horas
  },
  remove: (response, key) => {
    response.cookie(key, "", { maxAge: -1, httpOnly: false });
  }
};