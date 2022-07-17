import { celebrate, Joi, Segments } from 'celebrate';

export const AuthSignValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        email: Joi.string().email().max(50).required(),
        password: Joi.string().min(8).max(20).required()
    })
});