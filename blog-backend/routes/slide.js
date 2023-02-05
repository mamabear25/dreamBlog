import express from 'express';
import { getSlides } from '../controllers/slide.js';

const router = express.Router()

router.get("/slides", getSlides)

export default router;

