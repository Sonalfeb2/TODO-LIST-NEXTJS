import Head from "next/head";
import NewTodo from "../components/NewTodo";
import TodoList from "../components/TodoList";
export default function Home() {
  const onAddTodo = async(obj) =>{
    const res = await fetch('api/newTodo',{
      method : 'POST',
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json();
    console.log(data);

  }
  return (
    <div>
      <Head>
        <title>TODO LIST</title>
      </Head>
      <NewTodo onAddTodo={(e)=>onAddTodo(e)}/>
      <TodoList/>
    </div>
  );
}
