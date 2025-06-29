import express from 'express';
import { generateSignature } from '../cotroller/SignUpload.js';

const   router = express.Router();
// /api/sign-upload
router.post('/', generateSignature);

export default router;
