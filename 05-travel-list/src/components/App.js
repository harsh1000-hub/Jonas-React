import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

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
