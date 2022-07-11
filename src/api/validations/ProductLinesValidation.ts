import { celebrate, Joi, Segments } from 'celebrate';

export const ProductLinesCreateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        productLine: Joi.string().required(),
        textDescription: Joi.string().allow(null, ''),
        htmlDescription: Joi.string().allow(null, ''),
        image: Joi.object().allow(null, '')
    })
});

export const ProductLinesUpdateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        textDescription: Joi.string().allow(null, ''),
        htmlDescription: Joi.string().allow(null, ''),
        image: Joi.object().allow(null, '')
    }).min(1)
});