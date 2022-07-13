import { celebrate, Joi, Segments } from 'celebrate';

export const OrdersCreateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        orderNumber: Joi.number().integer().required(),
        orderDate: Joi.date().required(),
        requiredDate: Joi.date().required(),
        shippedDate: Joi.date().allow(null),
        status: Joi.string().max(15).required(),
        comments: Joi.string().allow(null), //text?
        customerNumber: Joi.number().integer().required(),
    })
});

export const OrdersUpdateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        orderDate: Joi.date(),
        requiredDate: Joi.date(),
        shippedDate: Joi.date().allow(null),
        status: Joi.string().max(15),
        comments: Joi.string().allow(null),
        customerNumber: Joi.number().integer(),
    }).min(1)
});