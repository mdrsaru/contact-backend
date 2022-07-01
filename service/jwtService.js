
const jwt = require('jsonwebtoken')
const jwtService = () => {

    const generateToken = async (args = {}) => {
        console.log(args)
        const token = await jwt.sign(
            args.payload,
            args.tokenSecret,
            {
                algorithm: 'HS256',
                expiresIn: args.tokenLife
            }
        )
        console.log(token)
        return token
    }

    const verifyToken = (args = {}) => {
        let token = args.token;
        let tokenSecret = args.tokenSecret;
        console.log(token,'token');
        console.log(tokenSecret,'tokenSercret')
        return jwt.verify(token, tokenSecret);
    };
    return {
        generateToken,
        verifyToken,
    };

}

module.exports = jwtService