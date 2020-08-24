// import dotenv from 'dotenv';
// import { Pool } from 'mongoose';

// dotenv.config();
// const pool = new Pool({ connectionString: process.env.DATABASE_URL });
// export default pool;

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Fiacre:Nyagatoma@cluster0.amvqa.mongodb.net/Blog-fiacre?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("Blog-fiacre").collection("devices");
  // perform actions on the collection object
  client.close();
});

