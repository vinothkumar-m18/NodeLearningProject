import express from 'express'
import { createPost, deletePost, getAllPosts, getSinglePost } from '../controllers/postControllers.js';
const router = express.Router();

router.get('/', getAllPosts)
router.get('/:id', getSinglePost)
router.post('/', createPost)
router.delete('/:id', deletePost)
export default router;