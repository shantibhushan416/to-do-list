import React, { useState, useEffect } from "react";
import "./TodoList.css";

const TodoList = (props) => {
  const [toDoItem, setToDoItem] = useState("");
  const { deleteItems, items, id, edit, toEditId, handleUnDo, save } = props;
  const handleChange = (event) => {
    setToDoItem(event.target.value);
  };

  useEffect(() => setToDoItem(items), [toEditId]);

  return (
    <div className="TodoList">
      <button onClick={() => deleteItems(id)}>×</button>
      {id === toEditId ? (
        <input value={toDoItem} onChange={handleChange}></input>
      ) : (
        <li>{items}</li>
      )}

      {id === toEditId ? (
        <div>
          <button onClick={() => save(toDoItem, id)}>Save</button>
          <button onClick={handleUnDo}>Undo</button>
        </div>
      ) : (
        <button onClick={() => edit(id)}>Edit</button>
      )}
    </div>
  );
};

export default TodoList;
