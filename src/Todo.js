import { useState } from "react";
import "./Todo.css";


const Todo = () => {
  const [todo, setTodo] = useState(["Milk", "Tea", "Coffee","Bread"]);
  const [Add, setAdd] = useState("");
  const onLogin = (e) => {
    e.preventDefault()
    console.log([...todo])
    let todo1=[...todo,Add]
    setTodo(todo1);
  };
  const deleteItem = (item) => {
    const deletedItem = todo.filter((value) => value !== item);
    setTodo(deletedItem);
  };
  
  return (
    <div>
      <input
        type="text"
        value={Add}
        onChange={(e) => setAdd(e.target.value)}
      ></input>
      <button onClick={(e) => onLogin(e)}> Add Item </button>
      
        
        {todo.map((item,key) => (
          <li key={key} >
            {item} <button onClick={() => deleteItem(item)}>Delete</button>
          </li>
          ))}
        
         
      </div>
  );
};
export default Todo;
