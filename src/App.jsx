import { useState } from "react";
import "./assets/styles/styles.css";

function App() {
  const [newItem, setNewItem] = useState("");
  const [todo, setTodo] = useState([]);

  function handleAdd(e) {
    e.preventDefault();
    setTodo([
      ...todo,
      { id: crypto.randomUUID(), title: newItem, completed: false },
    ]);
    setNewItem("");
    console.log(todo);
  }

  function toggleTodo(id, completed) {
    setTodo((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
      });
    });
  }

  function handleDelete(item) {
    setTodo(todo.filter((q) => q.id !== item));
  }
  return (
    <>
      <form className="new-item-form" onSubmit={handleAdd}>
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">
          Add
        </button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todo?.map((item) => (
          <li key={item.id}>
            <label>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={(e) => toggleTodo(item.id, e.target.checked)}
              />
              {item.title}
            </label>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
