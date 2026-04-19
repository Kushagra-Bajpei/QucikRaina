import express from 'express';
import { verifyToken } from '../middleware/verifyUser.js';
import { createDream, getDreams, deleteDream } from '../controllers/dreamController.js';

const router = express.Router();

router.post('/create', verifyToken, createDream);
router.get('/getdreams', verifyToken, getDreams);
router.delete('/deletedream/:dreamId', verifyToken, deleteDream);

export default router;
