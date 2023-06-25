const { ValidationError } = require("../utils/APIError");
const {
  createContact,
  updateContact,
} = require("../validations/contactValidation");

const ContactService = require("../service/contactService")();

const TodoController = () => {
  const getAll = async (req, res, next) => {
    const result = await ContactService.getAll(req.query);
    return res.status(200).send({
      data: result,
    });
  };

  const create = async (req, res, next) => {
    try {
      const fullName = req.body.fullName;
      const email = req.body.email;
      const phone_number = req.body.phone_number;
      const { value, error } = createContact.validate({
        fullName,
        email,
        phone_number,
      });

      if (error && error.details) {
        throw new ValidationError(error);
      }
      const result = await ContactService.create({
        fullName,
        email,
        phone_number,
      });

      return res.status(200).send({
        data: result,
      });
    } catch (err) {
      res.status(500).send({
        err: err.message,
      });
    }
  };

  const update = async (req, res, next) => {
    try {
      const id = req.body.id;
      const fullName = req.body.fullName;
      const email = req.body.email;
      const phone_number = req.body.phone_number;

      const { value, error } = updateContact.validate({
        id,
        fullName,
        email,
        phone_number,
      });

      if (error && error.details) {
        throw new ValidationError(error);
      }

      const result = await ContactService.update({
        id,
        fullName,
        email,
        phone_number,
      });

      return res.status(200).send({
        data: result,
      });
    } catch (err) {
      res.status(500).send({
        err: err.message,
      });
    }
  };

  const deleteContact = async (req, res, next) => {
    const result = await ContactService.deleteContact({id:req.params.id});
    return res.status(200).send({
      data: result,
    });
  };

  return {
    getAll,
    create,
    update,
    deleteContact,
  };
};

module.exports = TodoController;
