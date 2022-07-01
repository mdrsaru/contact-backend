const jwt = require('jsonwebtoken')


const TokenService = () =>{
    const generateToken = async(args={}) =>{
console.log(args)

const token = await jwt.sign(
    args.payload,
    args.secret,
    {
        algorithm:'HS256',
        expiresIn:args.tokenLife
    }
)

console.log(token)
return token
    }

    const verifyToken = async(args={})=>{
        const result = await jwt.verify(args.token,args.tokenSecret)
        console.log(result,'tokenService');
        return result;
    }

    return {
        generateToken,
        verifyToken,
    }
}

module.exports= TokenService