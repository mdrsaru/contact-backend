const User = require('../models/user')
const UserRepository = () => {
    const getAll = async(args = {}) => {
        //console.log(args)
        const result = await User.find(args)
        return result
    }

    const create = async(args = {}) => {
        const result = await User.create(args);
        return result
    }

    const findOne = async (args= {}) =>{
        const result = await User.findOne(args)
        return result
    }

    const update = async(args = {}) => {
        //console.log(args)
        const id = args.id;
        const firstName = args.firstName;
        const lastName = args.lastName;
        const dob = args.dob;
        const email = req.body.email;
        const password = req.body.password;
        const result = await User.findByIdAndUpdate(id,{$set:{
            firstName,
            lastName,
            dob,
            email,
            password
        }});
        return result
    }
    return {
        getAll,
        findOne,
        create,
        update
    }
}

module.exports = UserRepository