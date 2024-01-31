import React from "react";

// item component
export default function Item({ item, OnDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.id}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {/* above line strike the content when iten is packed==true */}
        {item.quantity} {item.description}
      </span>
      <button onClick={() => OnDeleteItem(item.id)}>❌</button>
    </li>
  );
}
