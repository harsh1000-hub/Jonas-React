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

  // update the state for setShowAddFriend
  function handleSetShowAddFriend() {
    setShowAddFriend((item) => !item);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        {showAddFriend === true && <FormAddFriend />}
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
function FriendsList() {
  const friends = initialFriends;
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
function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label>👬🏻 Friend name </label>
      <input type="text" />
      <label>🖼️ Image URL</label>
      <input type="text" />
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
