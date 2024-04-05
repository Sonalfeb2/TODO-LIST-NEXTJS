import styles from '../styles/todoList.module.css'
const Task = props => {
  return (
    <div>
        <h1>Completed TasK</h1>
    <ul className={styles.todo}>
      {props.tasks.length > 0
        ? props.tasks.map(li =>
            <li key={li.id}>
              {li.title}
            </li>
          )
        : <h1>No Tasks Found</h1>}
    </ul>
    </div>
  );
};
export default Task;
