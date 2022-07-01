const bcrypt = require('bcrypt');
const constants = require('../config/constants');
const passwordService = () => {

    const hashPassword = async (password) => {
        try {
            const saltRound = constants.saltRound;
           
            const result = await bcrypt.hash(password, saltRound)
            return result
        }
        catch (err) {
            //console.log(err)
        }
    }

    const comparePassword = async (formPassword, hashedPassword) => {
        try {
            console.log(formPassword);
            console.log(hashedPassword)

            let result = await bcrypt.compare(formPassword,hashedPassword);
            console.log(result)
            return result
        }
        catch (err) {
            console.log(err)
        }
    }

    return {
        hashPassword,
        comparePassword
    }
}

module.exports = passwordService