const constants = require("../config/constants");

const tokenService = require("../service/tokenService")();

const authenticate = async (req, res, next) => {
  try{
      if(!req.headers.authorization){
          throw new Error('Token Required')
      }
    const [bearer, token] = req.headers.authorization.split(' ');

    const tokenSecret = constants.tokenSecret;
    const result = await tokenService.verifyToken({ token, tokenSecret });
    if (!result) {
        throw new Error('JWT not verified')
    }
    next()
}
catch(err){
    console.log(err,'err')
    res.status(500).send(err.message)
}
}

module.exports = authenticate