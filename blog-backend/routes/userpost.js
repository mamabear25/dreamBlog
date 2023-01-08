import express from 'express';
import { 
    getPostsByUser,
    getUser,
    updateUser,
    deleteUser,
} from '../controllers/userposts.js';

const router = express.Router()

router.get("/", getPostsByUser)
router.put("/:id", updateUser)
router.get("/:id", getUser)
router.delete("/:id", deleteUser)


export default router;