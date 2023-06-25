const Joi = require('joi');

const createContact = Joi.object()
  .keys({
    fullName: Joi.string().required(),
    email: Joi.string().email(),
    phone_number: Joi.string()
      .length(10)
      .pattern(/^[0-9]+$/)
      .required(),
  })
  .options({ abortEarly: false });


  const updateContact = Joi.object()
  .keys({
    id: Joi.string().required(),
    fullName: Joi.string(),
    email: Joi.string().email(),
    phone_number: Joi.string()
      .length(10)
      .pattern(/^[0-9]+$/)
  })
  .options({ abortEarly: false });

  module.exports = { createContact,updateContact };