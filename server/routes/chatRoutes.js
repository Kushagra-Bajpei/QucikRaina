import express from 'express';
import { chatWithAI } from '../controllers/chatController.js';
import { verifyToken } from '../middleware/verifyUser.js';

const router = express.Router();

// Chat is temporarily unprotected for debugging
router.post('/send', chatWithAI);

export default router;
