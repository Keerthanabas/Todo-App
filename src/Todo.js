import { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState(["Milk", "Tea", "Coffee", "Bread"]);
  const [Add, setAdd] = useState("");
  const onLogin = () => {
    todo.push(Add);
    setTodo(todo);
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
      <button onClick={() => onLogin()}> Add Item </button>
      
      <ol>
      
        {todo.map((item) => (
          <li>
            {item} <button onClick={() => deleteItem(item)}>Delete</button>
          </li>
          ))}
      </ol>
      
    </div>
  );
};
export default Todo;
