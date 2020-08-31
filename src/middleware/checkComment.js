import Joi from 'joi';
import validationHelper from '../helpers/validationHelper';

export const checkComment = (req, res, next) => {
    const createUserSchema = Joi.object({
        fullname: Joi.string().min(3).required(),
        suggestion:Joi.string().min(10).required(),
    });
    const schemasValidation = createUserSchema.validate(req.body);
    validationHelper(res, schemasValidation, next);
};
export default checkComment;
