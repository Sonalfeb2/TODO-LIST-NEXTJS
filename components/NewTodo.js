import styles from '../styles/new-todo.module.css'

const NewTodo = () =>{
return(
    <div id="myDIV" className={styles.header}>
        <h2>My To Do List</h2>
        <input type="text" id="myInput" placeholder="Title..."  />
        <span onclick="newElement()" className={styles.addBtn}>
          Add
        </span>
      </div>
)
}
export default NewTodo;