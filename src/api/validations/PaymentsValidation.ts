import { celebrate, Joi, Segments } from 'celebrate';

export const PaymentsCreateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        customerNumber: Joi.number().required(),
        checkNumber: Joi.string().required(),
        paymentDate: Joi.string().required(),
        amount: Joi.number().required()
    })
});

export const PaymentsUpdateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        paymentDate: Joi.string(),
        amount: Joi.number()
    }).min(1)
});