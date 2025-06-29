// db.js (updated)
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const MONGO_URI = "mongodb+srv://root:root@cluster0.jh4grgw.mongodb.net/fileUpload";

const main = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    throw error; // Propagate the error to the caller
  }
};

export default main;