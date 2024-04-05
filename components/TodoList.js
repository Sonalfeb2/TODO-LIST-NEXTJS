import { useState } from "react";
import styles from "../styles/todoList.module.css";

const TodoList = props => {
  const [completed, setCompleted] = useState(false);
  const handler = (id, method) => {
    if (method === "completed") {
      setCompleted({
        id: id
      });
      setTimeout(() => {
        props.onCompletedTask(id);
        setCompleted(false);
      }, 1000);
    }
    if (method === "deleted") {
      props.onDeleteHandler(id);
    }
  };
  return (
    <ul className={styles.todo}>
      {props.tasks.length > 0
        ? props.tasks.map(
            li =>
              !li.completed &&
              <li
                key={li.id}
                className={li.id === completed.id ? styles.checked : ""}
                
              >
                <p onClick={() => handler(li.id, "completed")}>{li.title}</p>
                <span
                  className={styles.close}
                  onClick={() => handler(li.id, "deleted")}
                >
                  X
                </span>
              </li>
          )
        : <h1>No Tasks Found</h1>}
    </ul>
  );
};
export default TodoList;
