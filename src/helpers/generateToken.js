import jwt from 'jsonwebtoken';

const generateToken = (email, role) => jwt.sign({
    email, role,
}, process.env.MY_SECRET, {
    expiresIn: '2d',
});
export default generateToken; 