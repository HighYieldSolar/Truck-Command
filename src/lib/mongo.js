import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);
export const connectDB = async () => {
  if (!client.topology) await client.connect();
  return client.db('truck-command');
};