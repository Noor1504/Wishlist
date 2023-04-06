import { useState } from "react";

export function ItemForm({ addItem }) {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    addItem(text, priority);
    setText("");
    setPriority(1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-inputs">
        <input
          type="text"
          placeholder="Add new item"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="number"
          placeholder="Priority (1-5)"
          value={priority}
          min="1"
          max="5"
          onChange={(e) => setPriority(parseInt(e.target.value))}
        />
      </div>
      <button type="submit">Add Item</button>
    </form>
  );
}
