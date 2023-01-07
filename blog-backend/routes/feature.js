import express from 'express';
import { 
    getFeaturedPost,
    getFeaturedPostById
} from '../controllers/feature.js';

const router = express.Router()

router.get("/", getFeaturedPost)
router.get("/:id", getFeaturedPostById)

export default router;