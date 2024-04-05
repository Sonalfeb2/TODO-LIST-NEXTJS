
import styles from "../styles/todoList.module.css";

const TodoList = props => {
  const handler = id => {
     props.onCompletedTask(id)
  };
  

  return (
    <ul className={styles.todo}>
      {props.tasks.length>0
        ? props.tasks.map(li =>
            <li
              key={li.id}
              className={li.completed ? styles.checked : ""}
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
