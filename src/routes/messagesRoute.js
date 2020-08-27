import express from 'express';
import Message from '../controllers/messagesController';
import checkToken from '../middleware/checkToken';
import checkMessage from '../middleware/checkMessage';

const router = express.Router();
router.post('/message',[checkMessage], Message.create);
router.get('/message',[checkToken], Message.readAll);
router.get('/message/:id',[checkToken], Message.readById);
router.put('/message/:id',[checkToken,checkMessage], Message.update);
router.delete('/message/:id',[checkToken], Message.deleteMessage);
export default router;
