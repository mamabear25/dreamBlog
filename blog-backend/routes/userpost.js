import express from 'express';
import { 
    getPostsByUser
} from '../controllers/userposts.js';

const router = express.Router()

router.get("/", getPostsByUser)


export default router;