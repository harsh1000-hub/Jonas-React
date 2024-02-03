import { useState } from "react";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  // create a state for Show FormAddFriend
  const [showAddFriend, setShowAddFriend] = useState(false);

  // create a common state that is used in FriendsList and FormAddFriend component
  const [friends, setFriends] = useState(initialFriends);

  // update the state for setShowAddFriend
  function handleSetShowAddFriend() {
    setShowAddFriend((item) => !item);
  }

  // handleSetFriends function
  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    // after the submitting the form then change the state of showAddFriend to false so that form will hide
    setShowAddFriend(false);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} />
        {showAddFriend === true && (
          <FormAddFriend onAddFriend={handleAddFriend} />
        )}
        <Button onClick={handleSetShowAddFriend}>
          {/* below conditional rendering if showAddFriend is false then show AddFriend and otherwise show Close*/}
          {showAddFriend === false ? "Add Friend" : "Close"}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

// Button Component
function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

// FriendList Component
function FriendsList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

// Specific friend component
function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 ? (
        <p className="red">
          You owe {friend.name} Rs. {Math.abs(friend.balance)}
        </p>
      ) : friend.balance === 0 ? (
        <p>You and {friend.name} are even</p>
      ) : (
        <p className="green">
          {friend.name} owe you Rs. {friend.balance}
        </p>
      )}
      <Button>Select</Button>
    </li>
  );
}

// FormAdd Friend Component
function FormAddFriend({ onAddFriend }) {
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

// Form Split Bill Component
function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>
      <label>💰 Bill Value</label>
      <input type="text" />
      <label>🧍‍♂️ Your Expense</label>
      <input type="text" />
      <label>👬🏻 X's Expense</label>
      <input type="text" disabled />{" "}
      {/* disabled attribute disable the typing in in this input box  */}
      <label>🤑 Who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">Friend</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
export default App;
