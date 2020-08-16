import express from 'express';
import {create,readAll,readById,update,deletePost} from '../controllers/postController';

const router = express.Router();
router.post('/post', create);
router.get('/post', readAll);
router.get('/post/:id', readById);
router.put('/post/:id', update);
router.delete('/post/:id', deletePost);
export default router;
