import React, { useState } from "react";
import TodoList from "./TodoList/TodoList";
import "./App.css";

const App = (props) => {
  const [inputList, setInputputList] = useState("");
  const [itemsList, setItemsList] = useState([]);
  const [toEditId, setToEditId] = useState(""); // 4

  const itemEvent = (event) => {
    setInputputList(event.target.value);
  };
  const listofItems = () => {
    if (inputList.trim() === "") return;

    setItemsList((olditems) => {
      return [...olditems, inputList];
    });

    setInputputList("");
  };
  const deleteItems = (id) => {
    const itemList = [...itemsList];
    itemList.splice(id, 1);
    setItemsList(itemList);
    // setItemsList((olditems) => {
    //   return olditems.filter((_, index) => {
    //     return index !== id;
    //   });
    // });
    if (toEditId === id) {
      setToEditId("");
    }
  };

  const edititems = (id) => {
    // const olditemindex = itemsList.findIndex((val) => {
    //   return val === item;
    // });
    // console.log(olditemindex);
    setToEditId(id);
  };

  const handleUnDo = () => {
    setToEditId("");
  };

  const handleSave = (item, id) => {
    const copyItemsList = [...itemsList];
    copyItemsList[id] = item;
    setItemsList(copyItemsList);
    setToEditId("");
  };

  return (
    <div className="App">
      <div className="center_div">
        <h2>To Do List</h2>
        <input
          value={inputList}
          type="text"
          placeholder="Add an item"
          onChange={itemEvent}
          maxLength="20"
        ></input>
        <button onClick={listofItems}>Add</button>

        <ol>
          {itemsList.map((items, index) => {
            return (
              <TodoList
                key={index}
                id={index}
                items={items}
                deleteItems={deleteItems}
                edit={edititems}
                toEditId={toEditId}
                handleUnDo={handleUnDo}
                save={handleSave}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default App;
