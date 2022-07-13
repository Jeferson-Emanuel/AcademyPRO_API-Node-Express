import { celebrate, Joi, Segments } from 'celebrate';

export const ProductsCreateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        productCode: Joi.string().max(15).required(),
        productName: Joi.string().max(70).required(),
        productLine: Joi.string().max(50).required(),
        productScale: Joi.string().max(10).required(),
        productVendor: Joi.string().max(50).required(),
        productDescription: Joi.string().required(), //text?
        quantityInStock: Joi.number().integer().required(),
        buyPrice: Joi.number().precision(2).required(),
        MSRP: Joi.number().precision(2).required()
    })
});

export const ProductsUpdateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        productName: Joi.string().max(70),
        productLine: Joi.string().max(50),
        productScale: Joi.string().max(10),
        productVendor: Joi.string().max(50),
        productDescription: Joi.string(), //text?
        quantityInStock: Joi.number().integer(),
        buyPrice: Joi.number().precision(2),
        MSRP: Joi.number().precision(2)
    }).min(1)
});