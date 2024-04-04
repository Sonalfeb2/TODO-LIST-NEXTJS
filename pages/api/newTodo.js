import { MongoClient } from "mongodb";
const url =
  "mongodb+srv://sonal:5zsSlXfuybPLlle7@cluster0.9caborj.mongodb.net/todos?retryWrites=true&w=majority&appName=Cluster0";

const handler = async (req, res) => {
  const client = await MongoClient.connect(url);
  const db = client.db();
  const collection = db.collection("todo");
  if (req.method === 'POST') {
    const data = req.body;
    await collection.insertOne(data);
  }

  res.json({message:'created'})
  
  client.close();
};
export default handler;
