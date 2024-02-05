import { useState } from "react";
import Button from "./Button";

// FormAdd Friend Component
export default function FormAddFriend({ onAddFriend }) {
  // create a state for name and image
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  // function handleSubmit when form submit
  function handleSubmit(e) {
    e.preventDefault(); // prevent the page reload situation when form submit

    // handle edge case if user not fill any of one field then not submitting the form
    if (!name || !image) return;

    // using a random id generate function
    const id = crypto.randomUUID();

    // create newFriend object
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    // here we update the state of setFriends
    onAddFriend(newFriend);

    // reset the state setName and setImage after submitting the form
    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👬🏻 Friend name </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>🖼️ Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}
