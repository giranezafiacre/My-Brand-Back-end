import Joi from 'joi';
import validationHelper from '../helpers/validationHelper';

export const checkPost = (req, res, next) => {
    const createUserSchema = Joi.object({
        title: Joi.string().min(10).required(),
        content:Joi.string().min(10).required(),
        author: Joi.string().min(3).required(),
    });
    const schemasValidation = createUserSchema.validate(req.body);
    validationHelper(res, schemasValidation, next);
};
export default checkPost;
