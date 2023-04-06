import "./App.css";

function Item({ item, index, removeItem, updatePriority, moveItemToTop }) {
  return (
    <div className="item">
      <div className="float-child1">
        <h3 style={{ padding: "7px" }}>
          {item.text}&nbsp; Priority: {item.priority}{" "}
        </h3>
      </div>
      <div>
        <button className="remove-button" onClick={() => removeItem(index)}>
          Remove
        </button>
        <button onClick={() => updatePriority(index, item.priority + 1)}>
          +
        </button>
        <button onClick={() => updatePriority(index, item.priority - 1)}>
          -
        </button>
        <button onClick={() => moveItemToTop(index)}>Move to Top</button>
      </div>
    </div>
  );
}
export default function ItemList({
  items,
  removeItem,
  updatePriority,
  moveItemToTop,
}) {
  return (
    <div className="item-list">
      {items.map((item, index) => (
        <>
          <br></br>
          <Item
            key={index}
            item={item}
            index={index}
            removeItem={removeItem}
            updatePriority={updatePriority}
            moveItemToTop={moveItemToTop}
          />
        </>
      ))}
    </div>
  );
}
