const jwtService = require("../service/jwtService")();
const constants = require('../config/constants')
const Authenticate =async(req,res,next) =>{
console.log(req.headers.authorization);
try{
const bearerToken = req.headers.authorization;
if(!bearerToken){
    console.log('if')
    throw new Error('Token required')
}
const [bearer, token] = bearerToken?.split(' ');
const result = await jwtService.verifyToken({
    token,
    tokenSecret:constants.tokenSecret
})
console.log(result)
if(!result){
throw new Error('Invalid token')
}
next()
}catch(err){
    console.log(err)
   res.send(err.message)
}
}

module.exports= Authenticate