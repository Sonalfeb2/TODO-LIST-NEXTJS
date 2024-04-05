import { MongoClient, ObjectId } from "mongodb";
const url =
  "mongodb+srv://sonal:5zsSlXfuybPLlle7@cluster0.9caborj.mongodb.net/todos?retryWrites=true&w=majority&appName=Cluster0";

const handler = async (req, res) => {
  const client = await MongoClient.connect(url);
  const db = client.db();
  const collection = db.collection("todo");
  if (req.method === 'POST') {
    const data = req.body;
    await collection.insertOne({title: data.title, completed:false});
    
  res.json({message:'created'})
  }
  if(req.method ==='PATCH'){
    const data = req.body;
  
   await collection.updateOne({_id: new ObjectId(data.taskid)},{$set:{completed:true}})

    res.json({message:'success'})
  }
  if(req.method ==="DELETE"){
    const data = req.body;
  
   await collection.deleteOne({_id: new ObjectId(data.id)})
  

    res.json({message:'success'})
  }
  
  client.close();
};
export default handler;
