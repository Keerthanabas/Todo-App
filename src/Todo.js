import { useState } from "react";
import "./Todo.css";


const Todo = () => {
  const [todo, setTodo] = useState(["Milk", "Tea", "Coffee"]);
  const [Add, setAdd] = useState("");
  const onLogin = () => {
    todo.push(Add);
    setTodo(todo);
  };
  const deleteItem = (item) => {
    const deletedItem = todo.filter((value) => value !== item);
    setTodo(deletedItem);
  };
  console.log(todo,"Todo")
  return (
    <div>
      <input
        type="text"
        value={Add}
        onChange={(e) => setAdd(e.target.value)}
      ></input>
      <button onClick={() => onLogin()}> Add Item </button>
      
      
        
        
          
      <ol>
        
        {todo.map((item,key) => (
          <li key={key}>
            {item} <button onClick={() => deleteItem(item)}>Delete</button>
          </li>
          ))}
         
      </ol> 
      
      
      
      
      
      </div>
  );
};
export default Todo;
