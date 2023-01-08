import express from 'express';
import { 
    getPostsByUser,
    getUser
} from '../controllers/userposts.js';

const router = express.Router()

router.get("/", getPostsByUser)
router.get("/:userId", getUser)


export default router;