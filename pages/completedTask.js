import Task from "../components/CompletedTask";
import { MongoClient } from "mongodb";
const CompletedTask = (props)=>{
     
    return(
        <Task tasks={props.tasks}/>
    )
}
export async function getStaticProps() {
    const url =
      "mongodb+srv://sonal:5zsSlXfuybPLlle7@cluster0.9caborj.mongodb.net/todos?retryWrites=true&w=majority&appName=Cluster0";
  
    const client = await MongoClient.connect(url);
    const db = client.db();
    const collection = db.collection("todo");
    const find = await collection.find({completed:true}).toArray();
    client.close();
  
    return {
      props: {
        tasks: find.map(todo => ({
          title: todo.title,
          completed: todo.completed,
          id: todo._id.toString()
        }))
      },
      revalidate: 1
    };
  }
  export default CompletedTask;