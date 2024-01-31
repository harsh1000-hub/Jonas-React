import React from "react";
import { useState } from "react";
import Item from "./Item";

// PackageList Component
function PackingList({ items, OnDeleteItem, onToggleItem, onClearList }) {
  // create useState for sort the items
  const [sortBy, setSortBy] = useState("input"); // by default we have sort items on the basis of inputs

  // sorted items variable that take sorted array on the basis of state of sortBy
  let sortedItems;
  if (sortBy === "input") {
    sortedItems = items;
  }

  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
    // first slice the original array so sort method not sort the original array and localCompare() method sort on the basis of the
  }

  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  // recieve array props from parent component thas is items to replicate in UI part
  return (
    <div className="list">
      <ul>
        {sortedItems.map(
          // not use items.map from right now rather than use sortedItems array
          (
            item // here use that props that is items
          ) => (
            <Item
              item={item}
              key={item.id}
              OnDeleteItem={OnDeleteItem}
              onToggleItem={onToggleItem}
            />
          )
        )}
      </ul>
      <div className="actions" onChange={(e) => setSortBy(e.target.value)}>
        <select value={sortBy}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        {/*below button the clear the whole list*/}
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}

export default PackingList;
