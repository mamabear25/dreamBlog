import express from 'express';
import { 
    getPostsCountByUser
} from '../controllers/postCount.js';

const router = express.Router()

router.get("/", getPostsCountByUser)


export default router;

