import { useState } from "react";
import { ItemForm } from "./ItemForm";
import ItemList from "./ItemList";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  const addItem = (text, priority) => {
    const newItem = { text, priority };
    setItems([...items, newItem]);
  };

  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const updatePriority = (index, priority) => {
    const newItems = [...items];
    newItems[index].priority = priority;
    setItems(newItems);
  };

  const moveItemToTop = (index) => {
    const newItems = [...items];
    const item = newItems.splice(index, 1)[0];
    newItems.unshift(item);
    setItems(newItems);
  };

  return (
    <div className="main-div">
      <div className="center-div">
        <br></br>
        <h1>Wish List</h1>
        <br></br>
        <ItemForm addItem={addItem} />
        <ItemList
          items={items}
          removeItem={removeItem}
          updatePriority={updatePriority}
          moveItemToTop={moveItemToTop}
        />
      </div>
    </div>
  );
}

export default App;
