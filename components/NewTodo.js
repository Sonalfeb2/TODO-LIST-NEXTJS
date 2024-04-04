import { useRef } from 'react';
import styles from '../styles/new-todo.module.css'

const NewTodo = (props) =>{
  const task = useRef();
  const newMeetUp = () =>{
    const obj = {title:task.current.value}
    console.log(obj)
    props.onAddTodo(obj);
  }
return(
    <div id="myDIV" className={styles.header}>
        <h2>My To Do List</h2>
        <input type="text" id="myInput" placeholder="Title..." ref={task} />
        <span onclick="newElement()" className={styles.addBtn} onClick={()=>newMeetUp()}>
          Add
        </span>
      </div>
)
}
export default NewTodo;