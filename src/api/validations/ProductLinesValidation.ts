import { celebrate, Joi, Segments } from 'celebrate';

export const ProductLinesCreateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        productLine: Joi.string().max(50).required(),
        textDescription: Joi.string().max(4000).allow(null),
        htmlDescription: Joi.string().allow(null, ''), //mediuntext?
        image: Joi.object().allow(null, '') //blob?
    })
});

export const ProductLinesUpdateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        textDescription: Joi.string().max(50).allow(null),
        htmlDescription: Joi.string().allow(null),
        image: Joi.object().allow(null)
    }).min(1)
});