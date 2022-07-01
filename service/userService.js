const constants = require('../config/constants')

const passwordService = require('./passwordService')()

const UserRepository = require('../repository/userRepository')()
// const jwtService = require('../service/jwtService')()
const tokenService = require('../service/tokenService')()
const UserService = () => {
    const getAll = async (args = {}) => {

        const result = await UserRepository.getAll(args)
        return result
    }


    const login = async (args = {}) => {
        let email = args.email;
        let password = args.password;

        let user = await UserRepository.findOne({ email: email })
        console.log(user, 'userPassword')
        console.log(password, 'formData')
        let compare = await passwordService.comparePassword(password, user?.password)
        if (!compare) {
            throw new Error('Password does not match')
        }

        let payload ={
            id: user?._id,
            email:user?.email,
        }
        let accessTokenData = {
            payload:payload,
            secret:constants.tokenSecret,
            tokenLife:'15m'
        }
        const token = await tokenService.generateToken(accessTokenData)

        return {
            id: user?._id,
            email: user?.email,
            token:token,
        }

    }
    const create = async (args = {}) => {

        const firstName = args.firstName;
        const lastName = args.lastName;
        const deadline = args.deadline;
        const email = args.email;
        const password = args.password;

        let hashPassword = await passwordService.hashPassword(password)
        console.log(hashPassword)
        const result = await UserRepository.create({
            firstName,
            deadline,
            lastName,
            email,
            password: hashPassword,
        })


        return result
    }

    const update = async (args = {}) => {
        const id = args.id;
        const firstName = args.firstName;
        const points = args.points;
        const dob = args.dob;
        const result = await UserRepository.update({
            id,
            firstName,
            dob,
            points
        })
        return result
    }
    return {
        getAll,
        login,
        create,
        update
    }
}

module.exports = UserService