import { useState } from "react";

export default function App() {
  // create a items state that's use in packagelist and form component both so we uplift the state
  const [items, setItems] = useState([]); // declare with empty array bcz list is in array form.

  // handleAddItems function
  function handleAddItems(newItem) {
    //console.log(items);
    setItems((items) => [...items, newItem]);
  }

  // handleDeleteItems
  function handleDeleteItem(id) {
    setItems((items) => items.filter((itemObj) => itemObj.id !== id));
  }

  // handleToggleItem function
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((itemObj) =>
        itemObj.id === id ? { ...itemObj, packed: !itemObj.packed } : itemObj
      )
    );
  }

  // handleClearList function
  function handleClearList() {
    const isChecked = window.confirm(
      "Are you sure you want to delete all items"
    );
    if (isChecked) {
      setItems((items) => (items = []));
    }
  }

  return (
    <div className="container">
      <Logo />
      {/* below we pass props in function manner also like in Form component */}
      <Form OnAddItems={handleAddItems} />
      <PackingList
        items={items}
        OnDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

// Logo components
function Logo() {
  return <h1> 🏝️ Far Away 🧳</h1>;
}

// Form component
function Form({ OnAddItems }) {
  // description state
  const [description, setDescription] = useState("");

  // quantity state
  const [quantity, setQuantity] = useState(1);

  // handle submit button event
  function handleSubmit(e) {
    // stop the default behaviour of page reload when submit event occur
    e.preventDefault();

    // handle one clause that is if description is empty so we can't submit the from just return from there
    if (!description) {
      return;
    }
    const newItem = { description, quantity, packed: false, id: Math.random() }; // create a new item in the array
    console.log(newItem);

    // use the passed props function from parent component
    OnAddItems(newItem);

    // setDescription and setQuantity to its original state after form submit
    setDescription((item) => (item = ""));
    setQuantity((item) => (item = 1));
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip 😍 ?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))} // here e.target.value by default a string so convert into a number
      >
        {/* below line Array.from create a array of 20 length (_,i) -> this first parameter means array element that we don't need that;s why we pass as dashed '_' and second parameter means array index that we need */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)} // here we controlled the element
      />
      <button>ADD</button>
    </form>
  );
}

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

// item component
function Item({ item, OnDeleteItem, onToggleItem }) {
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

// Stats Components
function Stats({ items }) {
  // initial conditional redering
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your package list 🚀</em>
      </p>
    );
  }

  // here we derived state
  const numsItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / numsItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : ` 🧳 You have ${numsItems} items on you list, and you already packed
        ${packedItems} (${percentage}%)`}
      </em>
    </footer>
  );
}