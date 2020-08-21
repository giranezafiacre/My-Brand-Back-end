import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
export const checkToken = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({
            status: 401,
            error: 'Token not provided',
        });
    } else {
        try{
        const verified = jwt.verify(authorization, process.env.MY_SECRET);
        req.tokenData = verified;
        if (req.tokenData) {
            next();
        } else {
            return res.status(403).json({
                status: 403,
                error: 'You are not authorized to perform this task sign up first',
            });
        }}catch (error) {
            return res.status(401).json({
                status: 401,
                error: 'You are not authorized to perform this task',
            });
        }
    }
};
export default checkToken;
