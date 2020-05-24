let jwt = require('jsonwebtoken');

let checkToken = (req, res, next) => {
    var token=req.headers['authorization'];
    
    if(token) {
    jwt.verify(token, 'sathya', (err, decoded) => {
      if (err) {
         res.status(401).send({ msg: 'Invalid Token' });
      } else {
       next();
      }
    });
  } else {
     res.status(401).send({ msg: 'Token not supplied' });
  }
};

module.exports = {
  checkToken: checkToken
}