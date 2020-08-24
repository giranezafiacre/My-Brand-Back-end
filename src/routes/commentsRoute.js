import express from 'express';
import {create,readAll,readById,update,deleteComment} from '../controllers/commentsController';
import checkToken from '../middleware/checkToken';

const router = express.Router();
router.post('/comment',[checkToken], create);
router.get('/comment',[checkToken], readAll);
router.get('/comment/:id',[checkToken], readById);
router.put('/comment/:id',[checkToken], update);
router.delete('/comment/:id',[checkToken], deleteComment);
export default router;