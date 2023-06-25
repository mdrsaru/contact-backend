const ContactRepository = require('../repository/contactRepository')()

const ContactService = () => {
    const getAll = async (args = {}) => {

        const result = await ContactRepository.getAll(args)
        return result
    }

    const create = async (args = {}) => {

        const fullName = args.fullName;
        const phone_number = args.phone_number;
        const email = args.email;
        const result = await ContactRepository.create({
            fullName,
            email,
            phone_number
        })
        return result
    }

    const update = async (args = {}) => {
        const id = args.id;
        const fullName = args.fullName;
        const phone_number = args.phone_number;
        const email = args.email;
        const result = await ContactRepository.update({
            id,
            fullName,
            email,
            phone_number
        })
        return result
    }

    const deleteContact = async (args = {}) => {

        const result = await ContactRepository.deleteContact(args)
        return result
    }

    return {
        getAll,
        create,
        update,
        deleteContact
    }
}

module.exports = ContactService