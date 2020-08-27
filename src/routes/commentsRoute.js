import express from 'express';
import Comment from '../controllers/commentsController';
import checkToken from '../middleware/checkToken';
import checkComment from '../middleware/checkComment';

const router = express.Router();
router.post('/comment',[checkToken,checkComment], Comment.create);
router.get('/comment',[checkToken], Comment.readAll);
router.get('/comment/:id',[checkToken], Comment.readById);
router.put('/comment/:id',[checkToken,checkComment], Comment.update);
router.delete('/comment/:id',[checkToken], Comment.deleteComment);
export default router;