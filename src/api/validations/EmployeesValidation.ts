import { celebrate, Joi, Segments } from 'celebrate';
import { maxHeaderSize } from 'http';

export const EmployeesCreateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        employeeNumber: Joi.number().integer().required(),
        lastName: Joi.string().max(50).required(),
        firstName: Joi.string().max(50).required(),
        extension: Joi.string().max(10).required(),
        email: Joi.string().max(100).required(),
        officeCode: Joi.string().max(10).required(),
        reportsTo: Joi.number().integer().allow(null),
        jobTitle: Joi.string().max(50).required(),
    })
});

export const EmployeesUpdateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        lastName: Joi.string().max(50),
        firstName: Joi.string().max(50),
        extension: Joi.string().max(10),
        email: Joi.string().max(100),
        officeCode: Joi.string().max(10),
        reportsTo: Joi.number().integer().allow(null),
        jobTitle: Joi.string().max(50),
    }).min(1)
});