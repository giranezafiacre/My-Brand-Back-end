import express from 'express';
import User from '../controllers/userController';
import checkUser from '../middleware/checkUser';

const router = express.Router();
router.post('/user',[checkUser], User.create);
router.post('/user/login',[checkUser], User.login);
router.get('/user', User.readAll);
router.get('/user/:id', User.readById);
router.put('/user/:id',[checkUser], User.update);
router.delete('/user/:id', User.deleteUser);
export default router;
