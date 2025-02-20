import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI; // Ensure this is set in .env.local
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let db;
export async function connectToDatabase() {
  if (!db) {
    await client.connect();
    db = client.db("your-database-name"); // Replace with your actual database name
  }
  return { db, client };
}
