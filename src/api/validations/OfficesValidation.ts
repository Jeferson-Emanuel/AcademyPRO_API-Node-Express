import { celebrate, Joi, Segments } from 'celebrate';

export const OfficesCreateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        officeCode: Joi.string().max(10).required(),
        city: Joi.string().max(50).required(),
        phone: Joi.string().max(50).required(),
        addressLine1: Joi.string().max(50).required(),
        addressLine2: Joi.string().max(50).allow(null),
        state: Joi.string().max(50).allow(null),
        country: Joi.string().max(50).required(),
        postalCode: Joi.string().max(15).required(),
        territory: Joi.string().max(10).required(),
    })
});

export const OfficesUpdateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        city: Joi.string().max(50),
        phone: Joi.string().max(50),
        addressLine1: Joi.string().max(50),
        addressLine2: Joi.string().max(50).allow(null),
        state: Joi.string().max(50).allow(null),
        country: Joi.string().max(50),
        postalCode: Joi.string().max(15),
        territory: Joi.string().max(10),
    }).min(1)
});