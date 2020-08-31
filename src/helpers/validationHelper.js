const validationHelper = (res, schemasValidation, next) => {
    const error=schemasValidation.error;
    if (error) { return res.status(400).json({ status: 400, error: error.details[0].message }); }
    next();
};
export default validationHelper;
