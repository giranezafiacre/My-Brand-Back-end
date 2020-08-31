import Joi from 'joi';
import validationHelper from '../helpers/validationHelper';

export const checkMessage = (req, res, next) => {
    const createUserSchema = Joi.object({
        fullname: Joi.string().min(10).required(),
        email:Joi.string().email({ minDomainSegments: 2 }).required(),
        phone: Joi.string().min(5).required(),
        message:Joi.string().min(10).required(),
    });
    const schemasValidation = createUserSchema.validate(req.body);
    validationHelper(res, schemasValidation, next);
};
export default checkMessage;
