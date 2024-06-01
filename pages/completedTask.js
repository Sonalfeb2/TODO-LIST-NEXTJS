import Task from "../components/CompletedTask";
import { MongoClient } from "mongodb";
import { useState } from "react";
import Toast from "../components/Toast";

import { useRouter } from "next/router";
const CompletedTask = props => {
  const [showToast, setShowToast] = useState({ show: false, message: "" });
  const router = useRouter();
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
    router.push("/completedTask");
  };

  return (
    <div>
      <Task tasks={props.tasks} onDeleteHandler={e => onDeleteHandler(e)} />

      {showToast.show && <Toast message={showToast.message} />}
    </div>
  );
};
export async function getStaticProps() {
  const url =
    "mongodb+srv://sonal:5zsSlXfuybPLlle7@cluster0.9caborj.mongodb.net/todos?retryWrites=true&w=majority&appName=Cluster0";

  const client = await MongoClient.connect(url);
  const db = client.db();
  const collection = db.collection("todo");
  const find = await collection.find({ completed: true }).toArray();
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
