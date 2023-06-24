import "./assets/styles/styles.css";

function App() {
  return (
    <>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input type="text" />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox" />
            test
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            test
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>
  );
}

export default App;
