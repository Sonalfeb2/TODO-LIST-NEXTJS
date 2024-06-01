import styles from '../styles/todoList.module.css'
import { Button } from 'react-bootstrap';
const Task = props => {
  return (
    <div>
        <h1>Completed TasK</h1>
    <ul className={styles.todo}>
      {props.tasks.length > 0
        ? props.tasks.map(li =>
            <li key={li.id} style={{display:'flex',justifyContent:'space-between'}}>
             <p>{li.title}</p><Button variant='danger' onClick={()=>props.onDeleteHandler(li.id)}>Delete</Button>
            </li>
          )
        : <h1>No Tasks Found</h1>}
    </ul>
    </div>
  );
};
export default Task;
