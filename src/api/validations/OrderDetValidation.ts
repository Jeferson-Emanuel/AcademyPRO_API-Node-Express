import { celebrate, Joi, Segments } from 'celebrate';

export const OrderDetCreateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        orderNumber: Joi.number().required(),
        productCode: Joi.string().required(),
        quantityOrdered: Joi.number().required(),
        priceEach: Joi.number().required(),
        orderLineNumber: Joi.number().required(),
    })
});

export const OrderDetUpdateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        productCode: Joi.string(),
        quantityOrdered: Joi.number(),
        priceEach: Joi.number(),
        orderLineNumber: Joi.number(),
    }).min(1)
});