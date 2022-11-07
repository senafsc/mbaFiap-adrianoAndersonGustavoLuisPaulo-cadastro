const jwt = require("jsonwebtoken");
const cfg = require("../config/cfg");


const verificar_token = (req, res, next) => {
  console.log('LOG => VERIFICAR TOKEN: ', { token: req.headers.token });
  const token = req.headers.token;
  if (!token) return res.status(401).send({ output: `Não autorizado` });

  jwt.verify(token, cfg.jwt_secret , (erro, result) => {
    if (erro)
      return res.status(401).send({ output: `Token inválido -> ${erro}` });
    req.data = {
      id: result.id,
      user: result.nomeusuario,
      email: result.email,
    };
    next();
  });
}


module.exports = verificar_token;