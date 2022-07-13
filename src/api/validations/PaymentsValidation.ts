import { celebrate, Joi, Segments } from 'celebrate';

export const PaymentsCreateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        customerNumber: Joi.number().integer().required(),
        checkNumber: Joi.string().max(50).required(),
        paymentDate: Joi.date().required(),
        amount: Joi.number().precision(2).required()
    })
});

export const PaymentsUpdateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        paymentDate: Joi.string().max(50),
        amount: Joi.number().precision(2)
    }).min(1)
});