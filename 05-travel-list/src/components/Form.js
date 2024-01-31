import React from "react";
import { useState } from "react";

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
export default Form;
