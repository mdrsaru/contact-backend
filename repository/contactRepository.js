const Contact = require('../models/contact')
const ContactRepository = () => {
    const getAll = async(args = {}) => {
        const result = await Contact.find(args)
        return result
    }

    const create = async(args = {}) => {
        const result = await Contact.create(args);
        return result
    }

    const update = async(args = {}) => {
        const id = args.id;
        const fullName = args.fullName;
        const email = args.email;
        const phone_number = args.phone_number;
        const result = await Contact.findByIdAndUpdate(id,{$set:{
            fullName,
            email,
            phone_number
        }});
        return result
    }

    const deleteContact = async(args = {}) => {
        const id = args.id;
        const result = await Contact.deleteOne({ _id: id });
        return result
    }

    const findOne= async(args={}) => {
        return User.findOne(query);
      }
    
    return {
        getAll,
        create,
        update,
        deleteContact,
        findOne
    }
}

module.exports = ContactRepository