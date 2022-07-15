import { useState } from "react";
import "./App.css";

function App() {
  const [newItem, setNewItem] = useState("");
  const [todo, setTodo] = useState([]);

  const addItem = () => {
    if (!newItem) {
      alert("enter an item...");
      return;
    }
    const item = {
      id: new Date(),
      value: newItem,
    };

    setTodo((prevtodo) => [...prevtodo, item]);
    setNewItem("");
  };

  const deleteItem = (id) => {
    const filteredArray = todo.filter((item) => item.id !== id);
    setTodo(filteredArray);
  };

  return (
    <div className="App">
      <h2>Todo-List App</h2>

      <input
        type="text"
        placeholder="add item..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />

      <button onClick={() => addItem()}>Add</button>

      <ul>
        {todo.map((item) => {
          return (
            <li key={item.id}>
              {item.value}{" "}
              <button onClick={() => deleteItem(item.id)}>❌</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default App;
