import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];

export default function App() {
  return (
    <div className="container">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

// Logo components
function Logo() {
  return <h1> 🏝️ Far Away 🧳</h1>;
}

function Form() {
  // description state
  const [description, setDescription] = useState("");

  // quantity state
  const [quantity, setQuantity] = useState(1);

  // handle submit button event
  function handleSubmit(e) {
    // stop the defaul behaviour of page reload when submit event occur
    e.preventDefault();

    // handle one clause that is if description is empty so we can't submit the from just return from there
    if (!description) {
      return;
    }
    const newItem = { description, quantity, packed: false, id: Math.random() };
    console.log(newItem);

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
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
}

// PackageList Component
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

// item component
function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {/* above line strike the content when iten is packed==true */}
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

// Stats Components
function Stats() {
  return (
    <footer className="stats">
      <em>🧳 You have x items on you list, and you already packed X (X%)</em>
    </footer>
  );
}
