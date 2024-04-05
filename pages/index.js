import Head from "next/head";
import NewTodo from "../components/NewTodo";
import TodoList from "../components/TodoList";
import { MongoClient } from "mongodb";
import { useRouter } from "next/router";
import Toast from "../components/Toast";
import { useState } from "react";
export default function Home(props) {
  const router = useRouter();
  const [showToast, setShowToast] = useState(false)
  const onAddTodo = async obj => {
    const res = await fetch("api/newTodo", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json"
      }
    });
    await res.json();
    router.push("/");
  };
  const onCompletedTask = async id => {
    const obj = { taskid: id };
    const res = await fetch("api/newTodo", {
      method: "PATCH",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json"
      }
    });
    await res.json();
    setShowToast(true);
    setTimeout(()=>setShowToast(false),3000)
    router.push("/")
  };
  return (
    <div>
      <Head>
        <title>TODO LIST</title>
      </Head>
      <NewTodo onAddTodo={e => onAddTodo(e)} />
      <TodoList tasks={props.tasks} onCompletedTask={(id)=>onCompletedTask(id)}/>
      {showToast && <Toast message="1 Task Completed"/>}
    </div>
  );
}

export async function getStaticProps() {
  const url =
    "mongodb+srv://sonal:5zsSlXfuybPLlle7@cluster0.9caborj.mongodb.net/todos?retryWrites=true&w=majority&appName=Cluster0";

  const client = await MongoClient.connect(url);
  const db = client.db();
  const collection = db.collection("todo");
  const find = await collection.find({completed:false}).toArray();
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
