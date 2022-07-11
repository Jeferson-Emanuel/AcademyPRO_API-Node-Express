import { celebrate, Joi, Segments } from 'celebrate';

export const CustomersCreateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        customerNumber: Joi.number().required(),
        customerName: Joi.string().required(),
        contactLastName: Joi.string().required(),
        contactFirstName: Joi.string().required(),
        phone: Joi.string().required(),
        addressLine1: Joi.string().required(),
        addressLine2: Joi.string().allow(null, ''), //Allow column to be empty
        city: Joi.string().required(),
        state: Joi.string().allow(null, ''),
        postalCode: Joi.string().allow(null, ''),
        country: Joi.string().required(),
        salesRepEmployeeNumber: Joi.number().allow(null, ''),
        creditLimit: Joi.number().allow(null, ''),
    })
});

export const CustomersUpdateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        customerName: Joi.string(),
        contactLastName: Joi.string(),
        contactFirstName: Joi.string(),
        phone: Joi.string(),
        addressLine1: Joi.string(),
        addressLine2: Joi.string().allow(null, ''),
        city: Joi.string(),
        state: Joi.string().allow(null, ''),
        postalCode: Joi.string().allow(null, ''),
        country: Joi.string(),
        salesRepEmployeeNumber: Joi.number().allow(null, ''),
        creditLimit: Joi.number().allow(null, ''),
    }).min(1)
});