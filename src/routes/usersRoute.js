import express from 'express';
import {create,readAll,readById,login,update,deleteUser} from '../controllers/userController';

const router = express.Router();
router.post('/user', create);
router.get('/user/login', login);
router.get('/user', readAll);
router.get('/user/:id', readById);
router.put('/user/:id', update);
router.delete('/user/:id', deleteUser);
export default router;
