import express from 'express';
import {create,readAll,readById,update,deletePost} from '../controllers/postController';
import checkToken from '../middleware/checkToken';

const router = express.Router();
router.post('/post',[checkToken], create);
router.get('/post', [checkToken],readAll);
router.get('/post/:id', [checkToken],readById);
router.put('/post/:id',[checkToken], update);
router.delete('/post/:id',[checkToken], deletePost);
export default router;
