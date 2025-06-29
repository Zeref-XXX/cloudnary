import express from 'express';
import { createUpload } from '../cotroller/upload.js';

const   router = express.Router();

//  / api/sign-upload
router.post('/', createUpload);

export default router;
