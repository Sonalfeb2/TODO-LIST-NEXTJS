import Head from "next/head";
import NewTodo from "../components/NewTodo";
import TodoList from "../components/TodoList";
import { MongoClient } from "mongodb";
import { useRouter } from "next/router";
import Toast from "../components/Toast";
import { useState } from "react";
export default function Today(props) {
  const router = useRouter();
  const [showToast, setShowToast] = useState({ show: false, message: "" });
  const onAddTodo = async obj => {
    const res = await fetch("api/newTodo", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json"
      }
    });
    await res.json();

    setShowToast({ show: true, message: "Task Added..." });
    setTimeout(() => setShowToast(false), 3000);
    router.push("/today");
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
    setShowToast({ show: true, message: "1 Task COMPLETED..." });
    setTimeout(() => setShowToast(false), 3000);
    router.push("/today");
  };
  const onDeleteHandler = async e => {
    const res = await fetch("api/newTodo", {
      method: "DELETE",
      body: JSON.stringify({ id: e }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    await res.json();

    setShowToast({ show: true, message: "1 Task DELETED..." });
    router.push("/today");
  };

  return (
    <div>
      <Head>
        <title>TODO LIST</title>
      </Head>
      <NewTodo onAddTodo={e => onAddTodo(e)} />
      <TodoList
        tasks={props.tasks}
        onCompletedTask={id => onCompletedTask(id)}
        onDeleteHandler={e => onDeleteHandler(e)}
      />
      {showToast.show && <Toast message={showToast.message} />}
    </div>
  );
}

export async function getStaticProps() {
  const url = process.env.MONGODB_URL

  const client = await MongoClient.connect(url);
  const db = client.db();
  const collection = db.collection("todo");
  const find = await collection.find({ completed: false }).toArray();
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
