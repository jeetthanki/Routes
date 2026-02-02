import React, { useState, useEffect } from "react";
import "../Styles/Stock.css";

const Stock = () => {
  const [items, setItems] = useState([{ id: 1, name: "laptop", qty: 10 }]);

  useEffect(() => {
    console.log(items);
  }, [items]);

  const [name, setName] = useState("");
  const [qty, setQty] = useState("");

  const addItem = () => {
    if (!name || !qty) return;
    setItems([...items, { id: Date.now(), name, qty: +qty }]);
    setName("");
    setQty("");
  };
  const updateQty = (id, value) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, qty: item.qty + value } : item,
      ),
    );
  };

  const deleteItems = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h3>Stock Management</h3>
      <input className="input"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input className="input"
        type="number"
        placeholder="qty"
        value={qty}
        onChange={(e) => setQty(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} {item.qty}
            <button onClick={() => updateQty(item.id, 1)}>Add</button>
            <button onClick={() => updateQty(item.id, -1)}>Remove</button>
            <button onClick={() => deleteItems(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stock;
