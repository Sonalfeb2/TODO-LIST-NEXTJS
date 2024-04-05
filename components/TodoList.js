import { useState } from "react";
import styles from "../styles/todoList.module.css";

const TodoList = props => {
  const [completed, setCompleted] = useState(false);
  const handler = id => {
    setCompleted({
      id: id
    })
    setTimeout(() => {
      props.onCompletedTask(id);
      setCompleted(false);
    }, 1000);
  };
  
  return (
    <ul className={styles.todo}>
      {props.tasks.length > 0
        ? props.tasks.map(
            li =>
              !li.completed &&
              <li
                key={li.id}
                className={li.id===completed.id ? styles.checked : ""}
                onClick={() => handler(li.id)}
              >
                {li.title}
                <span className={styles.close}>X</span>
              </li>
          )
        : <h1>No Tasks Found</h1>}
    </ul>
    
  );
};
export default TodoList;
