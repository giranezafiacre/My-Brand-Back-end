import express from 'express';
import {create,readAll,readById,update,deleteMessage} from '../controllers/messagesController';
import checkToken from '../middleware/checkToken';

const router = express.Router();
router.post('/message', create);
router.get('/message',[checkToken], readAll);
router.get('/message/:id',[checkToken], readById);
router.put('/message/:id',[checkToken], update);
router.delete('/message/:id',[checkToken], deleteMessage);
export default router;
