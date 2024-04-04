import Head from "next/head";
import NewTodo from "../components/NewTodo";
import TodoList from "../components/TodoList";
export default function Home() {
  return (
    <div>
      <Head>
        <title>TODO LIST</title>
      </Head>
      <NewTodo/>
      <TodoList/>
    </div>
  );
}
