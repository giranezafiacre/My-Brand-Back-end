import express from 'express';
import Post from '../controllers/postController';
import checkToken from '../middleware/checkToken';
import checkPost from '../middleware/checkPost';
import checkAdmin from '../middleware/checkAdmin';

const router = express.Router();
router.post('/post',[checkToken,checkPost], Post.create);
router.get('/post', [checkToken],Post.readAll);
router.get('/post/:id', [checkToken],Post.readById);
router.put('/post/:id',[checkToken,checkAdmin,checkPost], Post.update);
router.delete('/post/:id',[checkToken,checkAdmin], Post.deletePost);
export default router;
