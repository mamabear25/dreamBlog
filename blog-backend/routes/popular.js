import express from 'express';
import { 
    getPopularPosts,
    getPopularPost
} from '../controllers/popular.js';

const router = express.Router()

router.get("/", getPopularPosts);
router.get("/:id", getPopularPost);

export default router;