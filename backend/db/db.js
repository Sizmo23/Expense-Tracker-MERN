import { config } from 'dotenv';
import mongoose from 'mongoose';

config();

export async function db() {
  try {
    await mongoose.connect(process.env.Mongo_URL);
    console.log("Connected to the database");
  } catch (error) {
    console.log(`Error inside db: ${error}`);
  }
};

export default db;
