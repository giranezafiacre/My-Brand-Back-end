import Joi from 'joi';
import validationHelper from '../helpers/validationHelper';

export const checkUser = (req, res, next) => {
    const createUserSchema = Joi.object({
        email: Joi.string().email({ minDomainSegments: 2 }).required(),
        password: Joi.string().regex(/^[a-zA-Z0-9!@#$%^&*]{3,30}$/).min(4).required(),
    });
    const schemasValidation = createUserSchema.validate(req.body);
    validationHelper(res, schemasValidation, next);
};
export default checkUser;
