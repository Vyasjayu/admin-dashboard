import mongoose from 'mongoose';

export const connectDB = async (): Promise<void> => {
  if (mongoose.connections[0].readyState) return;

  const uri = process.env.MONGO_URI;

  if (!uri) {
    throw new Error("MONGO_URI is missing in environment variables");
  }

  await mongoose.connect(uri);
};
