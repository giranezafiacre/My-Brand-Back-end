import express from 'express';
import Message from '../controllers/messagesController';
import checkToken from '../middleware/checkToken';
import checkMessage from '../middleware/checkMessage';
import checkAdmin from '../middleware/checkAdmin';

const router = express.Router();
router.post('/message',[checkMessage], Message.create);
router.get('/message',[checkToken,checkAdmin], Message.readAll);
router.get('/message/:id',[checkToken,checkAdmin], Message.readById);
router.put('/message/:id',[checkToken,checkMessage], Message.update);
router.delete('/message/:id',[checkToken,checkAdmin], Message.deleteMessage);
export default router;
