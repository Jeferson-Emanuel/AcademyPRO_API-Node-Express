import { celebrate, Joi, Segments } from 'celebrate';

export const CustomersCreateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        customerNumber: Joi.number().integer().required(),
        customerName: Joi.string().max(50).required(),
        contactLastName: Joi.string().max(50).required(),
        contactFirstName: Joi.string().max(50).required(),
        phone: Joi.string().max(50).required(),
        addressLine1: Joi.string().max(50).required(),
        addressLine2: Joi.string().max(50).allow(null), //Allow column to be empty
        city: Joi.string().max(50).required(),
        state: Joi.string().max(50).allow(null),
        postalCode: Joi.string().max(15).allow(null),
        country: Joi.string().max(50).required(),
        salesRepEmployeeNumber: Joi.number().integer().allow(null),
        creditLimit: Joi.number().precision(2).allow(null),
    })
});

export const CustomersUpdateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        customerName: Joi.string().max(50),
        contactLastName: Joi.string().max(50),
        contactFirstName: Joi.string().max(50),
        phone: Joi.string().max(50),
        addressLine1: Joi.string().max(50),
        addressLine2: Joi.string().max(50).allow(null), //Allow column to be empty
        city: Joi.string().max(50),
        state: Joi.string().max(50).allow(null),
        postalCode: Joi.string().max(15).allow(null),
        country: Joi.string().max(50),
        salesRepEmployeeNumber: Joi.number().integer().allow(null),
        creditLimit: Joi.number().precision(2).allow(null),
    }).min(1)
});