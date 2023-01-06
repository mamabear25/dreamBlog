import express from 'express';
import { register, login, logout } from '../controllers/auth.js';

const router = express.Router()

router.post("/", register)
router.post("/:id", login)
router.post("/:id", logout)

export default router;