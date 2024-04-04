import { useState } from "react";
import styles from "../styles/todoList.module.css";
const initialList = [
  {
    id: 1,
    title: "Hit the gym ",
    checked: false
  },
  {
    id: 2,
    title: "Hit the gym ",
    checked: false
  },
  {
    id: 3,
    title: "Hit the gym ",
    checked: false
  },
  {
    id: 4,
    title: "Hit the gym ",
    checked: false
  }
];
const TodoList = () => {
  
  const [list, setListItem] = useState(initialList);
  const handler = (id) =>{
    let arr = []
     list.map((li)=>{
      if(li.id===id){
        li.checked = !li.checked
      }
      arr.push(li)

    })
    
  setListItem(()=>arr)
  }

  return (
    <ul className={styles.todo}>
      {list.map(li =>
        <li key={li.id} className={li.checked ? styles.checked:""} onClick={()=>handler(li.id)}>
          {li.title}
          <span className={styles.close}>X</span>
        </li>
      )}
    </ul>
  );
};

export default TodoList;
