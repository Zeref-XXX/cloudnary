import 'dotenv/config';
import express from 'express';
import cors from 'cors';  
import mongoose from 'mongoose';
import main from './db.js';
import { errorHandler } from './middleware/error.js';
import UploadRoute from './routes/uploadRoute.js';
import SignUpload from './routes/SignUpload.js';

const app = express();
const PORT =   4000;

// Middlewares
app.use(cors());  
app.use(express.json());

// Basic routes
app.get('/', (req, res) => res.send("Video Processing API"));
app.get('/health', (req, res) => res.status(200).json({
  status: 'UP',
  timestamp: new Date()
}));


// Feature routes
app.use('/api/upload', UploadRoute);
app.use('/api/sign-upload', SignUpload);



// Error handling
app.use(errorHandler);

// Database connection and server start
main().then(() => {
  const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

  // Graceful shutdown
  const shutdown = async () => {
    await mongoose.connection.close();
    server.close(() => {
      console.log('Server terminated');
      process.exit(0);
    });
  };

  process.on('SIGINT', shutdown);
  process.on('SIGTERM', shutdown);
}).catch(err => {
  console.error('Fatal startup error:', err);
  process.exit(1);
});